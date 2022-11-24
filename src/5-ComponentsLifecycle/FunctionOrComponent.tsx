import { EmojiNumberedList } from '9-DesignPatters/CompoundComponent/EmojiNumberedList';
import { ChapterWrapper, ColoredBlock, TextBlock } from 'components';

function Message({ children }: { children: JSX.Element }): JSX.Element {
  return <ColoredBlock>{children}</ColoredBlock>;
}

export function FunctionOrComponent(): JSX.Element {
  return (
    <ChapterWrapper title="Function or component?" subtitle="Components lifecycle">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <TextBlock>
          🔍 Open{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
          >
            React Dev Tools
          </a>{' '}
          and you'll see the difference between these two messages.
        </TextBlock>

        <Message>
          <EmojiNumberedList>
            <div>I'm the first message</div>
            <div>I'm a React component</div>
            <div>I'm rendered via React.createElement() call</div>
            <div>React stores instance of me in memory</div>
            <div>
              You can find me in <strong>⚛️ Components</strong> tab in your dev tools
            </div>
          </EmojiNumberedList>
        </Message>

        {Message({
          children: (
            <EmojiNumberedList>
              <div>I'm the second message</div>
              <div>I'm NOT a React component</div>
              <div>I was called as a regular JS function</div>
              <div>I'm just bunch of React elements and I belong to parent component</div>
              <div>
                I'm absent in <strong>⚛️ Components</strong> tab
              </div>
            </EmojiNumberedList>
          ),
        })}
      </div>
    </ChapterWrapper>
  );
}
