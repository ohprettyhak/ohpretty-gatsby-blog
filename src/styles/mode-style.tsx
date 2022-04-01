import { createGlobalStyle } from 'styled-components';

const ModeStyle = createGlobalStyle`
  :root {
    --mobile: 425px;
    --tablet: 768px;
    --desktop: 1200px;
    --default-font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif;
    --code-font-family: 'JetBrains Mono', SFMono-Regular, Pretendard, Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
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
      --toc-border: #ebebeb;
      --category-border: rgba(143, 144, 156, 0.5);
      --category-background: white;
      --recommend-post: rgb(248, 248, 248);
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
      --toc-border: #444444;
      --category-border: rgba(143, 144, 156, 0.5);
      --category-background: #221e1a;
      --recommend-post: #1F1A18;
    }
}
`;

export default ModeStyle;
