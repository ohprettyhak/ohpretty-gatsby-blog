import { createGlobalStyle } from 'styled-components';

const ModeStyle = createGlobalStyle`
  :root {
    --mobile: 425px;
    --tablet: 768px;
    --desktop: 1280px;
    --default-font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif;
    --code-font-family: 'JetBrains Mono', SFMono-Regular, Pretendard, Menlo, Consolas, 'PT Mono', 'Liberation Mono', Courier, monospace;
  }

  body {
    &.light {
      // common
      --primary: white;
      --line: #eeeeee;
      --mobile-menu: rgba(245, 245, 245, 0.98);
      --text: #202020;
      --text-secondary: #868e96;

      // index
      --cover: #fcfcfc;
      --selection: rgba(0, 0, 0, 0.075);

      // post 
      --toc-border: #ebebeb;
      --category-border: rgba(143, 144, 156, 0.5);
      --category-background: white;
      --recommend-post: rgb(248, 248, 248);

      // code-highlight
      --grvsc-border: rgba(0, 0, 0, 0.1);
      --grvsc-background: rgba(0, 0, 0, 0.02);
      --grvsc-line-text: #444444;
      --mtk4: #0000FF;
      --mtk1: #000000;
      --mtk11: #795E26;
      --mtk12: #001080; 
      --mtk15: #AF00DB; 
      --mtk8: #A31515; 
      --mtk7: #09885A; 
      --mtk3: #008000;
      --grvsc-line-highlighted-background-color: rgba(32, 32, 32, 0.05);
      --grvsc-line-highlighted-border-color: rgba(32, 32, 32, 0.2);
      --grvsc-line-highlighted-border-width: 4px;
    }

    &.dark {
      // common
      --primary: #202020;
      --line: #343434;
      --mobile-menu: rgba(32, 32, 32, 0.98);
      --text: white;
      --text-secondary: #bbbbbb;

      // index
      --cover: rgba(0, 0, 0, 0.2);
      --selection: rgba(255, 255, 255, 0.15);

      // post 
      --toc-border: #444444;
      --category-border: rgba(255, 255, 255, 0.2);
      --category-background: rgba(0, 0, 0, 0.3);
      --recommend-post: rgba(0, 0, 0, 0.2);

      // code-highlight
      --grvsc-border: rgba(0, 0, 0, 0.3);
      --grvsc-background: rgba(0, 0, 0, 0.2);
      --grvsc-line-text: #aaaaaa;
      --mtk4: #569CD6; 
      --mtk1: #D4D4D4; 
      --mtk11: #DCDCAA; 
      --mtk12: #9CDCFE; 
      --mtk15: #C586C0; 
      --mtk8: #CE9178; 
      --mtk7: #B5CEA8; 
      --mtk3: #6A9955; 
      --grvsc-line-highlighted-background-color: rgba(255, 255, 255, 0.1);
      --grvsc-line-highlighted-border-color: rgba(255, 255, 255, 0.5);
      --grvsc-line-highlighted-border-width: 4px;
    }
}
`;

export default ModeStyle;
