import { createGlobalStyle } from 'styled-components';

const ModeStyle = createGlobalStyle`
  :root {
    --mobile: 425px,
    --tablet: 768px,
    --desktop: 1200px,
  }

  body {
    &.light {
      // common
      --primary: white;
      --line: #eeeeee;
      --mobile-menu: rgba(245, 245, 245, 0.98);
      --text: #25201d;
      --text-secondary: #868e96;

      // index
      --cover: #fcfcfc;
      --selection: #e9ecef;

      // post 
      --category-border: rgba(143, 144, 156, 0.5);
      --category-background: white;
    }

    &.dark {
      // common
      --primary: #25201d;
      --line: #1a1613;
      --mobile-menu: rgba(37, 32, 29, 0.98);
      --text: white;
      --text-secondary: #bbbbbb;

      // index
      --cover: #221e1a;
      --selection: rgba(255, 255, 255, 0.15);

      // post 
      --category-border: rgba(143, 144, 156, 0.5);
      --category-background: #221e1a;
    }
}
`;

export default ModeStyle;
