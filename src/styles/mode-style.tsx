import { createGlobalStyle } from 'styled-components';

const ModeStyle = createGlobalStyle`
  :root {
    --mobile: 425px,
    --tablet: 768px,
    --desktop: 1200px,
  }

  body {
    &.light {
      --primary: white;
      --line: #eeeeee;
      --mobile-menu: rgba(245, 245, 245, 0.98);
      --text: #343a40;
      --text-secondary: #868e96;
      --cover: #fcfcfc;
    }

    &.dark {
      --primary: #25201d;
      --line: #1a1613;
      --mobile-menu: rgba(37, 32, 29, 0.98);
      --text: white;
      --text-secondary: #bbbbbb;
      --cover: #221e1a;
    }
}
`;

export default ModeStyle;
