import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          color: '#1275b5',
        }} /* Using the brand primary color directly */
      >
        <path
          d="M8 6C8 6 12 2 16 2C20 2 24 6 24 6C24 6 28 10 28 14C28 18 24 22 24 22C24 22 20 26 16 26C12 26 8 22 8 22C8 22 4 18 4 14C4 10 8 6 8 6Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 10V18M12 14H20"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>,
    {
      ...size,
    }
  );
}
