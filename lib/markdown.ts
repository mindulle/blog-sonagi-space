import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import { visit } from 'unist-util-visit';
import type { Root, List, ListItem, Heading, Text } from 'mdast';

export async function toggleRoutineCheckbox(
  markdown: string,
  targetTaskText: string,
  newCheckedState: boolean
): Promise<string> {
  let isTargetHeadingFound = false;
  let isListProcessed = false;
  let targetModified = false;

  const processor = remark()
    .use(remarkFrontmatter, ['yaml', 'toml'])
    .use(remarkGfm)
    .data('settings', { bullet: '-', listItemIndent: 'one' })
    .use(() => (tree: Root) => {
      for (let i = 0; i < tree.children.length; i++) {
        const node = tree.children[i];
        if (node.type === 'heading') {
          const headingNode = node as Heading;
          const headingText = headingNode.children
            .filter((child) => child.type === 'text')
            .map((child) => (child as Text).value).join('');
          if (headingText.includes('오늘의 루틴')) {
            isTargetHeadingFound = true;
            isListProcessed = false;
            continue;
          } else if (isTargetHeadingFound) {
            isTargetHeadingFound = false;
          }
        }
        if (isTargetHeadingFound && !isListProcessed && node.type === 'list') {
          const listNode = node as List;
          visit(listNode, 'listItem', (listItem: ListItem) => {
            let taskText = '';
            visit(listItem, 'text', (textNode: Text) => { taskText += textNode.value; });
            if (taskText.trim() === targetTaskText.trim()) {
              listItem.checked = newCheckedState;
              targetModified = true;
            }
          });
          isListProcessed = true;
        }
      }
    });

  const file = await processor.process(markdown);
  if (!targetModified) throw new Error(`타겟 루틴 "${targetTaskText}" 찾을 수 없음.`);
  return String(file);
}

export async function extractRoutines(markdown: string): Promise<Array<{ text: string, checked: boolean }>> {
  const routines: Array<{ text: string, checked: boolean }> = [];
  let isTargetHeadingFound = false;
  let isListProcessed = false;

  const processor = remark()
    .use(remarkFrontmatter, ['yaml', 'toml'])
    .use(remarkGfm)
    .use(() => (tree: Root) => {
      for (let i = 0; i < tree.children.length; i++) {
        const node = tree.children[i];
        if (node.type === 'heading') {
          const headingNode = node as Heading;
          const headingText = headingNode.children
            .filter((child) => child.type === 'text')
            .map((child) => (child as Text).value).join('');
          if (headingText.includes('오늘의 루틴')) {
            isTargetHeadingFound = true;
            isListProcessed = false;
            continue;
          } else if (isTargetHeadingFound) {
            isTargetHeadingFound = false;
          }
        }
        if (isTargetHeadingFound && !isListProcessed && node.type === 'list') {
          const listNode = node as List;
          visit(listNode, 'listItem', (listItem: ListItem) => {
            let taskText = '';
            visit(listItem, 'text', (textNode: Text) => { taskText += textNode.value; });
            routines.push({ text: taskText.trim(), checked: listItem.checked === true });
          });
          isListProcessed = true;
        }
      }
    });

  await processor.process(markdown);
  return routines;
}
