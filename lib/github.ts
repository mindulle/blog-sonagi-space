import { Octokit } from 'octokit';

let _octokit: Octokit | null = null;

function getOctokit() {
  if (!_octokit) {
    const token = process.env.OBSIDIAN_GITHUB_TOKEN;
    if (!token) {
      throw new Error('OBSIDIAN_GITHUB_TOKEN is not configured');
    }
    _octokit = new Octokit({ auth: token });
  }
  return _octokit;
}

export interface FileData {
  content: string;
  sha: string;
}

export async function getFile(path: string): Promise<FileData | null> {
  const octokit = getOctokit();
  const owner = process.env.OBSIDIAN_REPO_OWNER;
  const repo = process.env.OBSIDIAN_REPO_NAME;

  if (!owner || !repo) {
    throw new Error(
      'OBSIDIAN_REPO_OWNER or OBSIDIAN_REPO_NAME is not configured'
    );
  }

  try {
    const response = await octokit.rest.repos.getContent({
      owner,
      repo,
      path,
    });
    if (Array.isArray(response.data) || response.data.type !== 'file') {
      throw new Error('Path is not a single file');
    }
    const content = Buffer.from(response.data.content, 'base64').toString(
      'utf-8'
    );
    return { content, sha: response.data.sha };
  } catch (error: unknown) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'status' in error &&
      (error as { status: number }).status === 404
    ) {
      return null;
    }
    throw error;
  }
}

export async function updateFile(
  path: string,
  content: string,
  sha: string,
  commitMessage: string
): Promise<string> {
  const octokit = getOctokit();
  const owner = process.env.OBSIDIAN_REPO_OWNER;
  const repo = process.env.OBSIDIAN_REPO_NAME;

  if (!owner || !repo) {
    throw new Error(
      'OBSIDIAN_REPO_OWNER or OBSIDIAN_REPO_NAME is not configured'
    );
  }

  const response = await octokit.rest.repos.createOrUpdateFileContents({
    owner,
    repo,
    path,
    message: commitMessage,
    content: Buffer.from(content).toString('base64'),
    sha,
  });
  return response.data.content!.sha!;
}
