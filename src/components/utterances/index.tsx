import React, { useRef, createRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import metaConfig from '../../../gatsby-meta-config';
import * as style from './style';
import { RootState } from '../../redux/createStore';

const src = 'https://utteranc.es/client.js';
const utterancesSelector = 'iframe.utterances-frame';

const Utterances: React.FC = () => {
  const containerRef = createRef<HTMLDivElement>();
  const isUtterancesCreated = useRef(false);

  const repo: string | null = metaConfig.utterances;
  const theme: string = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    if (!repo) return;

    let themeMode: string;
    if (theme === '') themeMode = document.body.dataset.theme === 'light' ? 'github-light' : 'github-dark';
    else themeMode = theme === 'light' ? 'github-light' : 'github-dark';

    const createUtterancesEl = () => {
      const utterances = document.createElement('script');

      const attributes = {
        src,
        repo,
        'issue-term': 'pathname',
        label: 'comment',
        theme: themeMode,
        crossOrigin: 'anonymous',
        async: 'true',
      };
      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });
      containerRef.current?.appendChild(utterances);
      isUtterancesCreated.current = true;
    };

    const utterancesEl = containerRef.current?.querySelector(utterancesSelector) as HTMLIFrameElement;

    const postThemeMessage = () => {
      const message = {
        type: 'set-theme',
        theme: themeMode,
      };
      utterancesEl?.contentWindow?.postMessage(message, src);
    };

    isUtterancesCreated.current ? postThemeMessage() : createUtterancesEl();
  }, [repo, theme]);

  return <style.UtterancesStyle ref={containerRef} />;
};

Utterances.displayName = 'Utterances';

export default Utterances;
