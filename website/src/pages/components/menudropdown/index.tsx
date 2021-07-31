import { DefaultProps } from '../../../';
import Markdown from '../../../component/Markdown';

export default function Page(props: DefaultProps) {
  return (
    <Markdown
      path="https://github.com/uiwjs/react-native-uiw/edit/master/packages/core/src/MenuDropdown/README.md"
      renderPage={async () => {
        const md = await import('@uiw/react-native/lib/MenuDropdown/README.md');
        return md.default || md;
      }}
    />
  );
}
