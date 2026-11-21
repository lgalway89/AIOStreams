import * as React from 'react';
import { MdFolder } from 'react-icons/md';

const MARK = '\u{1F4D2}';

/**
 * Text with every 📒 (the server's mark for its own copy, My Library) drawn as a
 * folder icon in `color`, as no yellow folder emoji exists to send.
 */
export function FolderMarked({
  text,
  color = '#fcd34d',
}: {
  text: string;
  color?: string;
}) {
  if (!text.includes(MARK)) return <>{text}</>;
  const parts = text.split(MARK);
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <MdFolder
              aria-label="My copy"
              className="inline-block align-[-0.15em]"
              style={{ color }}
            />
          )}
          {part}
        </React.Fragment>
      ))}
    </>
  );
}
