export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type file = node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<markdownremark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<markdownremark>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<imagesharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<imagesharp>;
  id: Scalars['ID'];
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
};


export type filemodifiedtimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type fileaccesstimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type filechangetimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type filebirthtimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type fileatimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type filemtimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type filectimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type node = {
  id: Scalars['ID'];
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
};

export type internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type directory = node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
};


export type directorymodifiedtimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type directoryaccesstimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type directorychangetimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type directorybirthtimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type directoryatimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type directorymtimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type directoryctimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type site = node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<sitesitemetadata>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
};


export type sitebuildtimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type sitesitemetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  siteBaseUrl?: Maybe<Scalars['String']>;
  sitePathPrefix?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['String']>;
  slogan?: Maybe<Scalars['String']>;
  sloganDescription?: Maybe<Scalars['String']>;
  social?: Maybe<sitesitemetadatasocial>;
};

export type sitesitemetadatasocial = {
  github?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type sitefunction = node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
};

export type sitepage = node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<siteplugin>;
  id: Scalars['ID'];
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
};

export type siteplugin = node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
};

export type sitebuildmetadata = node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
};


export type sitebuildmetadatabuildtimeargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type markdownheading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type markdownheadinglevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type markdownexcerptformats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type markdownwordcount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type markdownremark = node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<markdownremarkfrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<markdownremarkfields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<markdownheading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<markdownwordcount>;
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
  grvscCodeBlocks?: Maybe<Array<Maybe<grvsccodeblock>>>;
  grvscCodeSpans?: Maybe<Array<Maybe<grvsccodespan>>>;
};


export type markdownremarkexcerptargs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
  format?: InputMaybe<markdownexcerptformats>;
};


export type markdownremarkexcerptastargs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


export type markdownremarkheadingsargs = {
  depth?: InputMaybe<markdownheadinglevels>;
};


export type markdownremarktableofcontentsargs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
  maxDepth?: InputMaybe<Scalars['Int']>;
  heading?: InputMaybe<Scalars['String']>;
};

export type markdownremarkfrontmatter = {
  title?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  cover?: Maybe<file>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['Date']>;
};


export type markdownremarkfrontmatterdateargs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type markdownremarkfields = {
  slug?: Maybe<Scalars['String']>;
};

export type grvscthemetokendata = {
  themeIdentifier: Scalars['String'];
  className: Scalars['String'];
  meta: Scalars['Int'];
  color: Scalars['String'];
  bold: Scalars['Boolean'];
  italic: Scalars['Boolean'];
  underline: Scalars['Boolean'];
};

export type grvsctoken = {
  text: Scalars['String'];
  startIndex: Scalars['Int'];
  endIndex: Scalars['Int'];
  scopes: Array<Scalars['String']>;
  html: Scalars['String'];
  className: Scalars['String'];
  defaultThemeTokenData: grvscthemetokendata;
  additionalThemeTokenData: Array<grvscthemetokendata>;
};

export type grvscguttercell = {
  className?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type grvsctokenizedline = {
  tokens: Array<grvsctoken>;
  gutterCells?: Maybe<Array<Maybe<grvscguttercell>>>;
  text: Scalars['String'];
  html: Scalars['String'];
  attrs: Scalars['JSON'];
  className: Scalars['String'];
  data: Scalars['JSON'];
  isHighlighted?: Maybe<Scalars['Boolean']>;
  lineNumber?: Maybe<Scalars['Int']>;
  diff?: Maybe<grvscdiff>;
};

export type grvscthemeconditionkind =
  | 'default'
  | 'matchMedia'
  | 'parentSelector';

export type grvscthemecondition = {
  condition: grvscthemeconditionkind;
  value?: Maybe<Scalars['String']>;
};

export type grvsctheme = {
  path: Scalars['String'];
  identifier: Scalars['String'];
  conditions: Array<grvscthemecondition>;
};

export type grvsccodeblock = node & {
  index: Scalars['Int'];
  html: Scalars['String'];
  text: Scalars['String'];
  preClassName: Scalars['String'];
  codeClassName: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  defaultTheme: grvsctheme;
  additionalThemes: Array<grvsctheme>;
  tokenizedLines?: Maybe<Array<grvsctokenizedline>>;
  id: Scalars['ID'];
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
};

export type grvsccodespan = node & {
  index: Scalars['Int'];
  html: Scalars['String'];
  text: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  defaultTheme: grvsctheme;
  additionalThemes: Array<grvsctheme>;
  tokens: Array<grvsctoken>;
  id: Scalars['ID'];
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
};

export type grvscstylesheet = node & {
  css: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
};

export type grvscthemeargument = {
  identifier: Scalars['String'];
  conditions: Array<Scalars['String']>;
};

export type grvscdiff =
  | 'ADD'
  | 'DEL';

export type gatsbyimageformat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type gatsbyimagelayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type gatsbyimageplaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type imageformat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type imagefit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type imagelayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type imagecropfocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type duotonegradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type potraceturnpolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type potrace = {
  turnPolicy?: InputMaybe<potraceturnpolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type imagesharp = node & {
  fixed?: Maybe<imagesharpfixed>;
  fluid?: Maybe<imagesharpfluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<imagesharporiginal>;
  resize?: Maybe<imagesharpresize>;
  id: Scalars['ID'];
  parent?: Maybe<node>;
  children: Array<node>;
  internal: internal;
};


export type imagesharpfixedargs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<duotonegradient>;
  traceSVG?: InputMaybe<potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<imageformat>;
  toFormatBase64?: InputMaybe<imageformat>;
  cropFocus?: InputMaybe<imagecropfocus>;
  fit?: InputMaybe<imagefit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type imagesharpfluidargs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<duotonegradient>;
  traceSVG?: InputMaybe<potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<imageformat>;
  toFormatBase64?: InputMaybe<imageformat>;
  cropFocus?: InputMaybe<imagecropfocus>;
  fit?: InputMaybe<imagefit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type imagesharpgatsbyimagedataargs = {
  layout?: InputMaybe<imagelayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<imageplaceholder>;
  blurredOptions?: InputMaybe<blurredoptions>;
  tracedSVGOptions?: InputMaybe<potrace>;
  formats?: InputMaybe<Array<InputMaybe<imageformat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<jpgoptions>;
  pngOptions?: InputMaybe<pngoptions>;
  webpOptions?: InputMaybe<webpoptions>;
  avifOptions?: InputMaybe<avifoptions>;
  transformOptions?: InputMaybe<transformoptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type imagesharpresizeargs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<duotonegradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<potrace>;
  toFormat?: InputMaybe<imageformat>;
  cropFocus?: InputMaybe<imagecropfocus>;
  fit?: InputMaybe<imagefit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type imagesharpfixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type imagesharpfluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type imageplaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type blurredoptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<imageformat>;
};

export type jpgoptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type pngoptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type webpoptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type avifoptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type transformoptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<duotonegradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<imagecropfocus>;
  fit?: InputMaybe<imagefit>;
};

export type imagesharporiginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type imagesharpresize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type query = {
  file?: Maybe<file>;
  allFile: fileconnection;
  directory?: Maybe<directory>;
  allDirectory: directoryconnection;
  site?: Maybe<site>;
  allSite: siteconnection;
  siteFunction?: Maybe<sitefunction>;
  allSiteFunction: sitefunctionconnection;
  sitePage?: Maybe<sitepage>;
  allSitePage: sitepageconnection;
  sitePlugin?: Maybe<siteplugin>;
  allSitePlugin: sitepluginconnection;
  siteBuildMetadata?: Maybe<sitebuildmetadata>;
  allSiteBuildMetadata: sitebuildmetadataconnection;
  markdownRemark?: Maybe<markdownremark>;
  allMarkdownRemark: markdownremarkconnection;
  grvscCodeBlock?: Maybe<grvsccodeblock>;
  allGrvscCodeBlock: grvsccodeblockconnection;
  grvscCodeSpan?: Maybe<grvsccodespan>;
  allGrvscCodeSpan: grvsccodespanconnection;
  grvscStylesheet?: Maybe<grvscstylesheet>;
  allGrvscStylesheet: grvscstylesheetconnection;
  imageSharp?: Maybe<imagesharp>;
  allImageSharp: imagesharpconnection;
  grvscHighlight?: Maybe<grvsccodeblock>;
};


export type queryfileargs = {
  sourceInstanceName?: InputMaybe<stringqueryoperatorinput>;
  absolutePath?: InputMaybe<stringqueryoperatorinput>;
  relativePath?: InputMaybe<stringqueryoperatorinput>;
  extension?: InputMaybe<stringqueryoperatorinput>;
  size?: InputMaybe<intqueryoperatorinput>;
  prettySize?: InputMaybe<stringqueryoperatorinput>;
  modifiedTime?: InputMaybe<datequeryoperatorinput>;
  accessTime?: InputMaybe<datequeryoperatorinput>;
  changeTime?: InputMaybe<datequeryoperatorinput>;
  birthTime?: InputMaybe<datequeryoperatorinput>;
  root?: InputMaybe<stringqueryoperatorinput>;
  dir?: InputMaybe<stringqueryoperatorinput>;
  base?: InputMaybe<stringqueryoperatorinput>;
  ext?: InputMaybe<stringqueryoperatorinput>;
  name?: InputMaybe<stringqueryoperatorinput>;
  relativeDirectory?: InputMaybe<stringqueryoperatorinput>;
  dev?: InputMaybe<intqueryoperatorinput>;
  mode?: InputMaybe<intqueryoperatorinput>;
  nlink?: InputMaybe<intqueryoperatorinput>;
  uid?: InputMaybe<intqueryoperatorinput>;
  gid?: InputMaybe<intqueryoperatorinput>;
  rdev?: InputMaybe<intqueryoperatorinput>;
  ino?: InputMaybe<floatqueryoperatorinput>;
  atimeMs?: InputMaybe<floatqueryoperatorinput>;
  mtimeMs?: InputMaybe<floatqueryoperatorinput>;
  ctimeMs?: InputMaybe<floatqueryoperatorinput>;
  atime?: InputMaybe<datequeryoperatorinput>;
  mtime?: InputMaybe<datequeryoperatorinput>;
  ctime?: InputMaybe<datequeryoperatorinput>;
  birthtime?: InputMaybe<datequeryoperatorinput>;
  birthtimeMs?: InputMaybe<floatqueryoperatorinput>;
  blksize?: InputMaybe<intqueryoperatorinput>;
  blocks?: InputMaybe<intqueryoperatorinput>;
  publicURL?: InputMaybe<stringqueryoperatorinput>;
  childrenMarkdownRemark?: InputMaybe<markdownremarkfilterlistinput>;
  childMarkdownRemark?: InputMaybe<markdownremarkfilterinput>;
  childrenImageSharp?: InputMaybe<imagesharpfilterlistinput>;
  childImageSharp?: InputMaybe<imagesharpfilterinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};


export type queryallfileargs = {
  filter?: InputMaybe<filefilterinput>;
  sort?: InputMaybe<filesortinput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type querydirectoryargs = {
  sourceInstanceName?: InputMaybe<stringqueryoperatorinput>;
  absolutePath?: InputMaybe<stringqueryoperatorinput>;
  relativePath?: InputMaybe<stringqueryoperatorinput>;
  extension?: InputMaybe<stringqueryoperatorinput>;
  size?: InputMaybe<intqueryoperatorinput>;
  prettySize?: InputMaybe<stringqueryoperatorinput>;
  modifiedTime?: InputMaybe<datequeryoperatorinput>;
  accessTime?: InputMaybe<datequeryoperatorinput>;
  changeTime?: InputMaybe<datequeryoperatorinput>;
  birthTime?: InputMaybe<datequeryoperatorinput>;
  root?: InputMaybe<stringqueryoperatorinput>;
  dir?: InputMaybe<stringqueryoperatorinput>;
  base?: InputMaybe<stringqueryoperatorinput>;
  ext?: InputMaybe<stringqueryoperatorinput>;
  name?: InputMaybe<stringqueryoperatorinput>;
  relativeDirectory?: InputMaybe<stringqueryoperatorinput>;
  dev?: InputMaybe<intqueryoperatorinput>;
  mode?: InputMaybe<intqueryoperatorinput>;
  nlink?: InputMaybe<intqueryoperatorinput>;
  uid?: InputMaybe<intqueryoperatorinput>;
  gid?: InputMaybe<intqueryoperatorinput>;
  rdev?: InputMaybe<intqueryoperatorinput>;
  ino?: InputMaybe<floatqueryoperatorinput>;
  atimeMs?: InputMaybe<floatqueryoperatorinput>;
  mtimeMs?: InputMaybe<floatqueryoperatorinput>;
  ctimeMs?: InputMaybe<floatqueryoperatorinput>;
  atime?: InputMaybe<datequeryoperatorinput>;
  mtime?: InputMaybe<datequeryoperatorinput>;
  ctime?: InputMaybe<datequeryoperatorinput>;
  birthtime?: InputMaybe<datequeryoperatorinput>;
  birthtimeMs?: InputMaybe<floatqueryoperatorinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};


export type queryalldirectoryargs = {
  filter?: InputMaybe<directoryfilterinput>;
  sort?: InputMaybe<directorysortinput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type querysiteargs = {
  buildTime?: InputMaybe<datequeryoperatorinput>;
  siteMetadata?: InputMaybe<sitesitemetadatafilterinput>;
  pathPrefix?: InputMaybe<stringqueryoperatorinput>;
  polyfill?: InputMaybe<booleanqueryoperatorinput>;
  jsxRuntime?: InputMaybe<stringqueryoperatorinput>;
  trailingSlash?: InputMaybe<stringqueryoperatorinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};


export type queryallsiteargs = {
  filter?: InputMaybe<sitefilterinput>;
  sort?: InputMaybe<sitesortinput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type querysitefunctionargs = {
  functionRoute?: InputMaybe<stringqueryoperatorinput>;
  pluginName?: InputMaybe<stringqueryoperatorinput>;
  originalAbsoluteFilePath?: InputMaybe<stringqueryoperatorinput>;
  originalRelativeFilePath?: InputMaybe<stringqueryoperatorinput>;
  relativeCompiledFilePath?: InputMaybe<stringqueryoperatorinput>;
  absoluteCompiledFilePath?: InputMaybe<stringqueryoperatorinput>;
  matchPath?: InputMaybe<stringqueryoperatorinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};


export type queryallsitefunctionargs = {
  filter?: InputMaybe<sitefunctionfilterinput>;
  sort?: InputMaybe<sitefunctionsortinput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type querysitepageargs = {
  path?: InputMaybe<stringqueryoperatorinput>;
  component?: InputMaybe<stringqueryoperatorinput>;
  internalComponentName?: InputMaybe<stringqueryoperatorinput>;
  componentChunkName?: InputMaybe<stringqueryoperatorinput>;
  matchPath?: InputMaybe<stringqueryoperatorinput>;
  pageContext?: InputMaybe<jsonqueryoperatorinput>;
  pluginCreator?: InputMaybe<sitepluginfilterinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};


export type queryallsitepageargs = {
  filter?: InputMaybe<sitepagefilterinput>;
  sort?: InputMaybe<sitepagesortinput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type querysitepluginargs = {
  resolve?: InputMaybe<stringqueryoperatorinput>;
  name?: InputMaybe<stringqueryoperatorinput>;
  version?: InputMaybe<stringqueryoperatorinput>;
  nodeAPIs?: InputMaybe<stringqueryoperatorinput>;
  browserAPIs?: InputMaybe<stringqueryoperatorinput>;
  ssrAPIs?: InputMaybe<stringqueryoperatorinput>;
  pluginFilepath?: InputMaybe<stringqueryoperatorinput>;
  pluginOptions?: InputMaybe<jsonqueryoperatorinput>;
  packageJson?: InputMaybe<jsonqueryoperatorinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};


export type queryallsitepluginargs = {
  filter?: InputMaybe<sitepluginfilterinput>;
  sort?: InputMaybe<sitepluginsortinput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type querysitebuildmetadataargs = {
  buildTime?: InputMaybe<datequeryoperatorinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};


export type queryallsitebuildmetadataargs = {
  filter?: InputMaybe<sitebuildmetadatafilterinput>;
  sort?: InputMaybe<sitebuildmetadatasortinput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type querymarkdownremarkargs = {
  id?: InputMaybe<stringqueryoperatorinput>;
  frontmatter?: InputMaybe<markdownremarkfrontmatterfilterinput>;
  excerpt?: InputMaybe<stringqueryoperatorinput>;
  rawMarkdownBody?: InputMaybe<stringqueryoperatorinput>;
  fileAbsolutePath?: InputMaybe<stringqueryoperatorinput>;
  fields?: InputMaybe<markdownremarkfieldsfilterinput>;
  html?: InputMaybe<stringqueryoperatorinput>;
  htmlAst?: InputMaybe<jsonqueryoperatorinput>;
  excerptAst?: InputMaybe<jsonqueryoperatorinput>;
  headings?: InputMaybe<markdownheadingfilterlistinput>;
  timeToRead?: InputMaybe<intqueryoperatorinput>;
  tableOfContents?: InputMaybe<stringqueryoperatorinput>;
  wordCount?: InputMaybe<markdownwordcountfilterinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};


export type queryallmarkdownremarkargs = {
  filter?: InputMaybe<markdownremarkfilterinput>;
  sort?: InputMaybe<markdownremarksortinput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type querygrvsccodeblockargs = {
  index?: InputMaybe<intqueryoperatorinput>;
  html?: InputMaybe<stringqueryoperatorinput>;
  text?: InputMaybe<stringqueryoperatorinput>;
  preClassName?: InputMaybe<stringqueryoperatorinput>;
  codeClassName?: InputMaybe<stringqueryoperatorinput>;
  language?: InputMaybe<stringqueryoperatorinput>;
  meta?: InputMaybe<jsonqueryoperatorinput>;
  defaultTheme?: InputMaybe<grvscthemefilterinput>;
  additionalThemes?: InputMaybe<grvscthemefilterlistinput>;
  tokenizedLines?: InputMaybe<grvsctokenizedlinefilterlistinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};


export type queryallgrvsccodeblockargs = {
  filter?: InputMaybe<grvsccodeblockfilterinput>;
  sort?: InputMaybe<grvsccodeblocksortinput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type querygrvsccodespanargs = {
  index?: InputMaybe<intqueryoperatorinput>;
  html?: InputMaybe<stringqueryoperatorinput>;
  text?: InputMaybe<stringqueryoperatorinput>;
  className?: InputMaybe<stringqueryoperatorinput>;
  language?: InputMaybe<stringqueryoperatorinput>;
  defaultTheme?: InputMaybe<grvscthemefilterinput>;
  additionalThemes?: InputMaybe<grvscthemefilterlistinput>;
  tokens?: InputMaybe<grvsctokenfilterlistinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};


export type queryallgrvsccodespanargs = {
  filter?: InputMaybe<grvsccodespanfilterinput>;
  sort?: InputMaybe<grvsccodespansortinput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type querygrvscstylesheetargs = {
  defaultTheme?: InputMaybe<Scalars['String']>;
  additionalThemes?: InputMaybe<Array<grvscthemeargument>>;
  injectStyles?: InputMaybe<Scalars['Boolean']>;
};


export type queryallgrvscstylesheetargs = {
  filter?: InputMaybe<grvscstylesheetfilterinput>;
  sort?: InputMaybe<grvscstylesheetsortinput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type queryimagesharpargs = {
  fixed?: InputMaybe<imagesharpfixedfilterinput>;
  fluid?: InputMaybe<imagesharpfluidfilterinput>;
  gatsbyImageData?: InputMaybe<jsonqueryoperatorinput>;
  original?: InputMaybe<imagesharporiginalfilterinput>;
  resize?: InputMaybe<imagesharpresizefilterinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};


export type queryallimagesharpargs = {
  filter?: InputMaybe<imagesharpfilterinput>;
  sort?: InputMaybe<imagesharpsortinput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type querygrvschighlightargs = {
  source: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Scalars['String']>;
  defaultTheme?: InputMaybe<Scalars['String']>;
  additionalThemes?: InputMaybe<Array<grvscthemeargument>>;
};

export type stringqueryoperatorinput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type intqueryoperatorinput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type datequeryoperatorinput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type floatqueryoperatorinput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type markdownremarkfilterlistinput = {
  elemMatch?: InputMaybe<markdownremarkfilterinput>;
};

export type markdownremarkfilterinput = {
  id?: InputMaybe<stringqueryoperatorinput>;
  frontmatter?: InputMaybe<markdownremarkfrontmatterfilterinput>;
  excerpt?: InputMaybe<stringqueryoperatorinput>;
  rawMarkdownBody?: InputMaybe<stringqueryoperatorinput>;
  fileAbsolutePath?: InputMaybe<stringqueryoperatorinput>;
  fields?: InputMaybe<markdownremarkfieldsfilterinput>;
  html?: InputMaybe<stringqueryoperatorinput>;
  htmlAst?: InputMaybe<jsonqueryoperatorinput>;
  excerptAst?: InputMaybe<jsonqueryoperatorinput>;
  headings?: InputMaybe<markdownheadingfilterlistinput>;
  timeToRead?: InputMaybe<intqueryoperatorinput>;
  tableOfContents?: InputMaybe<stringqueryoperatorinput>;
  wordCount?: InputMaybe<markdownwordcountfilterinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type markdownremarkfrontmatterfilterinput = {
  title?: InputMaybe<stringqueryoperatorinput>;
  categories?: InputMaybe<stringqueryoperatorinput>;
  cover?: InputMaybe<filefilterinput>;
  tags?: InputMaybe<stringqueryoperatorinput>;
  date?: InputMaybe<datequeryoperatorinput>;
};

export type filefilterinput = {
  sourceInstanceName?: InputMaybe<stringqueryoperatorinput>;
  absolutePath?: InputMaybe<stringqueryoperatorinput>;
  relativePath?: InputMaybe<stringqueryoperatorinput>;
  extension?: InputMaybe<stringqueryoperatorinput>;
  size?: InputMaybe<intqueryoperatorinput>;
  prettySize?: InputMaybe<stringqueryoperatorinput>;
  modifiedTime?: InputMaybe<datequeryoperatorinput>;
  accessTime?: InputMaybe<datequeryoperatorinput>;
  changeTime?: InputMaybe<datequeryoperatorinput>;
  birthTime?: InputMaybe<datequeryoperatorinput>;
  root?: InputMaybe<stringqueryoperatorinput>;
  dir?: InputMaybe<stringqueryoperatorinput>;
  base?: InputMaybe<stringqueryoperatorinput>;
  ext?: InputMaybe<stringqueryoperatorinput>;
  name?: InputMaybe<stringqueryoperatorinput>;
  relativeDirectory?: InputMaybe<stringqueryoperatorinput>;
  dev?: InputMaybe<intqueryoperatorinput>;
  mode?: InputMaybe<intqueryoperatorinput>;
  nlink?: InputMaybe<intqueryoperatorinput>;
  uid?: InputMaybe<intqueryoperatorinput>;
  gid?: InputMaybe<intqueryoperatorinput>;
  rdev?: InputMaybe<intqueryoperatorinput>;
  ino?: InputMaybe<floatqueryoperatorinput>;
  atimeMs?: InputMaybe<floatqueryoperatorinput>;
  mtimeMs?: InputMaybe<floatqueryoperatorinput>;
  ctimeMs?: InputMaybe<floatqueryoperatorinput>;
  atime?: InputMaybe<datequeryoperatorinput>;
  mtime?: InputMaybe<datequeryoperatorinput>;
  ctime?: InputMaybe<datequeryoperatorinput>;
  birthtime?: InputMaybe<datequeryoperatorinput>;
  birthtimeMs?: InputMaybe<floatqueryoperatorinput>;
  blksize?: InputMaybe<intqueryoperatorinput>;
  blocks?: InputMaybe<intqueryoperatorinput>;
  publicURL?: InputMaybe<stringqueryoperatorinput>;
  childrenMarkdownRemark?: InputMaybe<markdownremarkfilterlistinput>;
  childMarkdownRemark?: InputMaybe<markdownremarkfilterinput>;
  childrenImageSharp?: InputMaybe<imagesharpfilterlistinput>;
  childImageSharp?: InputMaybe<imagesharpfilterinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type imagesharpfilterlistinput = {
  elemMatch?: InputMaybe<imagesharpfilterinput>;
};

export type imagesharpfilterinput = {
  fixed?: InputMaybe<imagesharpfixedfilterinput>;
  fluid?: InputMaybe<imagesharpfluidfilterinput>;
  gatsbyImageData?: InputMaybe<jsonqueryoperatorinput>;
  original?: InputMaybe<imagesharporiginalfilterinput>;
  resize?: InputMaybe<imagesharpresizefilterinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type imagesharpfixedfilterinput = {
  base64?: InputMaybe<stringqueryoperatorinput>;
  tracedSVG?: InputMaybe<stringqueryoperatorinput>;
  aspectRatio?: InputMaybe<floatqueryoperatorinput>;
  width?: InputMaybe<floatqueryoperatorinput>;
  height?: InputMaybe<floatqueryoperatorinput>;
  src?: InputMaybe<stringqueryoperatorinput>;
  srcSet?: InputMaybe<stringqueryoperatorinput>;
  srcWebp?: InputMaybe<stringqueryoperatorinput>;
  srcSetWebp?: InputMaybe<stringqueryoperatorinput>;
  originalName?: InputMaybe<stringqueryoperatorinput>;
};

export type imagesharpfluidfilterinput = {
  base64?: InputMaybe<stringqueryoperatorinput>;
  tracedSVG?: InputMaybe<stringqueryoperatorinput>;
  aspectRatio?: InputMaybe<floatqueryoperatorinput>;
  src?: InputMaybe<stringqueryoperatorinput>;
  srcSet?: InputMaybe<stringqueryoperatorinput>;
  srcWebp?: InputMaybe<stringqueryoperatorinput>;
  srcSetWebp?: InputMaybe<stringqueryoperatorinput>;
  sizes?: InputMaybe<stringqueryoperatorinput>;
  originalImg?: InputMaybe<stringqueryoperatorinput>;
  originalName?: InputMaybe<stringqueryoperatorinput>;
  presentationWidth?: InputMaybe<intqueryoperatorinput>;
  presentationHeight?: InputMaybe<intqueryoperatorinput>;
};

export type jsonqueryoperatorinput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type imagesharporiginalfilterinput = {
  width?: InputMaybe<floatqueryoperatorinput>;
  height?: InputMaybe<floatqueryoperatorinput>;
  src?: InputMaybe<stringqueryoperatorinput>;
};

export type imagesharpresizefilterinput = {
  src?: InputMaybe<stringqueryoperatorinput>;
  tracedSVG?: InputMaybe<stringqueryoperatorinput>;
  width?: InputMaybe<intqueryoperatorinput>;
  height?: InputMaybe<intqueryoperatorinput>;
  aspectRatio?: InputMaybe<floatqueryoperatorinput>;
  originalName?: InputMaybe<stringqueryoperatorinput>;
};

export type nodefilterinput = {
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type nodefilterlistinput = {
  elemMatch?: InputMaybe<nodefilterinput>;
};

export type internalfilterinput = {
  content?: InputMaybe<stringqueryoperatorinput>;
  contentDigest?: InputMaybe<stringqueryoperatorinput>;
  description?: InputMaybe<stringqueryoperatorinput>;
  fieldOwners?: InputMaybe<stringqueryoperatorinput>;
  ignoreType?: InputMaybe<booleanqueryoperatorinput>;
  mediaType?: InputMaybe<stringqueryoperatorinput>;
  owner?: InputMaybe<stringqueryoperatorinput>;
  type?: InputMaybe<stringqueryoperatorinput>;
};

export type booleanqueryoperatorinput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type markdownremarkfieldsfilterinput = {
  slug?: InputMaybe<stringqueryoperatorinput>;
};

export type markdownheadingfilterlistinput = {
  elemMatch?: InputMaybe<markdownheadingfilterinput>;
};

export type markdownheadingfilterinput = {
  id?: InputMaybe<stringqueryoperatorinput>;
  value?: InputMaybe<stringqueryoperatorinput>;
  depth?: InputMaybe<intqueryoperatorinput>;
};

export type markdownwordcountfilterinput = {
  paragraphs?: InputMaybe<intqueryoperatorinput>;
  sentences?: InputMaybe<intqueryoperatorinput>;
  words?: InputMaybe<intqueryoperatorinput>;
};

export type fileconnection = {
  totalCount: Scalars['Int'];
  edges: Array<fileedge>;
  nodes: Array<file>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<filegroupconnection>;
};


export type fileconnectiondistinctargs = {
  field: filefieldsenum;
};


export type fileconnectionmaxargs = {
  field: filefieldsenum;
};


export type fileconnectionminargs = {
  field: filefieldsenum;
};


export type fileconnectionsumargs = {
  field: filefieldsenum;
};


export type fileconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: filefieldsenum;
};

export type fileedge = {
  next?: Maybe<file>;
  node: file;
  previous?: Maybe<file>;
};

export type pageinfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type filefieldsenum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark___id'
  | 'childrenMarkdownRemark___frontmatter___title'
  | 'childrenMarkdownRemark___frontmatter___categories'
  | 'childrenMarkdownRemark___frontmatter___cover___sourceInstanceName'
  | 'childrenMarkdownRemark___frontmatter___cover___absolutePath'
  | 'childrenMarkdownRemark___frontmatter___cover___relativePath'
  | 'childrenMarkdownRemark___frontmatter___cover___extension'
  | 'childrenMarkdownRemark___frontmatter___cover___size'
  | 'childrenMarkdownRemark___frontmatter___cover___prettySize'
  | 'childrenMarkdownRemark___frontmatter___cover___modifiedTime'
  | 'childrenMarkdownRemark___frontmatter___cover___accessTime'
  | 'childrenMarkdownRemark___frontmatter___cover___changeTime'
  | 'childrenMarkdownRemark___frontmatter___cover___birthTime'
  | 'childrenMarkdownRemark___frontmatter___cover___root'
  | 'childrenMarkdownRemark___frontmatter___cover___dir'
  | 'childrenMarkdownRemark___frontmatter___cover___base'
  | 'childrenMarkdownRemark___frontmatter___cover___ext'
  | 'childrenMarkdownRemark___frontmatter___cover___name'
  | 'childrenMarkdownRemark___frontmatter___cover___relativeDirectory'
  | 'childrenMarkdownRemark___frontmatter___cover___dev'
  | 'childrenMarkdownRemark___frontmatter___cover___mode'
  | 'childrenMarkdownRemark___frontmatter___cover___nlink'
  | 'childrenMarkdownRemark___frontmatter___cover___uid'
  | 'childrenMarkdownRemark___frontmatter___cover___gid'
  | 'childrenMarkdownRemark___frontmatter___cover___rdev'
  | 'childrenMarkdownRemark___frontmatter___cover___ino'
  | 'childrenMarkdownRemark___frontmatter___cover___atimeMs'
  | 'childrenMarkdownRemark___frontmatter___cover___mtimeMs'
  | 'childrenMarkdownRemark___frontmatter___cover___ctimeMs'
  | 'childrenMarkdownRemark___frontmatter___cover___atime'
  | 'childrenMarkdownRemark___frontmatter___cover___mtime'
  | 'childrenMarkdownRemark___frontmatter___cover___ctime'
  | 'childrenMarkdownRemark___frontmatter___cover___birthtime'
  | 'childrenMarkdownRemark___frontmatter___cover___birthtimeMs'
  | 'childrenMarkdownRemark___frontmatter___cover___blksize'
  | 'childrenMarkdownRemark___frontmatter___cover___blocks'
  | 'childrenMarkdownRemark___frontmatter___cover___publicURL'
  | 'childrenMarkdownRemark___frontmatter___cover___childrenMarkdownRemark'
  | 'childrenMarkdownRemark___frontmatter___cover___childrenImageSharp'
  | 'childrenMarkdownRemark___frontmatter___cover___id'
  | 'childrenMarkdownRemark___frontmatter___cover___children'
  | 'childrenMarkdownRemark___frontmatter___tags'
  | 'childrenMarkdownRemark___frontmatter___date'
  | 'childrenMarkdownRemark___excerpt'
  | 'childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenMarkdownRemark___fileAbsolutePath'
  | 'childrenMarkdownRemark___fields___slug'
  | 'childrenMarkdownRemark___html'
  | 'childrenMarkdownRemark___htmlAst'
  | 'childrenMarkdownRemark___excerptAst'
  | 'childrenMarkdownRemark___headings'
  | 'childrenMarkdownRemark___headings___id'
  | 'childrenMarkdownRemark___headings___value'
  | 'childrenMarkdownRemark___headings___depth'
  | 'childrenMarkdownRemark___timeToRead'
  | 'childrenMarkdownRemark___tableOfContents'
  | 'childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenMarkdownRemark___wordCount___sentences'
  | 'childrenMarkdownRemark___wordCount___words'
  | 'childrenMarkdownRemark___parent___id'
  | 'childrenMarkdownRemark___parent___parent___id'
  | 'childrenMarkdownRemark___parent___parent___children'
  | 'childrenMarkdownRemark___parent___children'
  | 'childrenMarkdownRemark___parent___children___id'
  | 'childrenMarkdownRemark___parent___children___children'
  | 'childrenMarkdownRemark___parent___internal___content'
  | 'childrenMarkdownRemark___parent___internal___contentDigest'
  | 'childrenMarkdownRemark___parent___internal___description'
  | 'childrenMarkdownRemark___parent___internal___fieldOwners'
  | 'childrenMarkdownRemark___parent___internal___ignoreType'
  | 'childrenMarkdownRemark___parent___internal___mediaType'
  | 'childrenMarkdownRemark___parent___internal___owner'
  | 'childrenMarkdownRemark___parent___internal___type'
  | 'childrenMarkdownRemark___children'
  | 'childrenMarkdownRemark___children___id'
  | 'childrenMarkdownRemark___children___parent___id'
  | 'childrenMarkdownRemark___children___parent___children'
  | 'childrenMarkdownRemark___children___children'
  | 'childrenMarkdownRemark___children___children___id'
  | 'childrenMarkdownRemark___children___children___children'
  | 'childrenMarkdownRemark___children___internal___content'
  | 'childrenMarkdownRemark___children___internal___contentDigest'
  | 'childrenMarkdownRemark___children___internal___description'
  | 'childrenMarkdownRemark___children___internal___fieldOwners'
  | 'childrenMarkdownRemark___children___internal___ignoreType'
  | 'childrenMarkdownRemark___children___internal___mediaType'
  | 'childrenMarkdownRemark___children___internal___owner'
  | 'childrenMarkdownRemark___children___internal___type'
  | 'childrenMarkdownRemark___internal___content'
  | 'childrenMarkdownRemark___internal___contentDigest'
  | 'childrenMarkdownRemark___internal___description'
  | 'childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenMarkdownRemark___internal___ignoreType'
  | 'childrenMarkdownRemark___internal___mediaType'
  | 'childrenMarkdownRemark___internal___owner'
  | 'childrenMarkdownRemark___internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___categories'
  | 'childMarkdownRemark___frontmatter___cover___sourceInstanceName'
  | 'childMarkdownRemark___frontmatter___cover___absolutePath'
  | 'childMarkdownRemark___frontmatter___cover___relativePath'
  | 'childMarkdownRemark___frontmatter___cover___extension'
  | 'childMarkdownRemark___frontmatter___cover___size'
  | 'childMarkdownRemark___frontmatter___cover___prettySize'
  | 'childMarkdownRemark___frontmatter___cover___modifiedTime'
  | 'childMarkdownRemark___frontmatter___cover___accessTime'
  | 'childMarkdownRemark___frontmatter___cover___changeTime'
  | 'childMarkdownRemark___frontmatter___cover___birthTime'
  | 'childMarkdownRemark___frontmatter___cover___root'
  | 'childMarkdownRemark___frontmatter___cover___dir'
  | 'childMarkdownRemark___frontmatter___cover___base'
  | 'childMarkdownRemark___frontmatter___cover___ext'
  | 'childMarkdownRemark___frontmatter___cover___name'
  | 'childMarkdownRemark___frontmatter___cover___relativeDirectory'
  | 'childMarkdownRemark___frontmatter___cover___dev'
  | 'childMarkdownRemark___frontmatter___cover___mode'
  | 'childMarkdownRemark___frontmatter___cover___nlink'
  | 'childMarkdownRemark___frontmatter___cover___uid'
  | 'childMarkdownRemark___frontmatter___cover___gid'
  | 'childMarkdownRemark___frontmatter___cover___rdev'
  | 'childMarkdownRemark___frontmatter___cover___ino'
  | 'childMarkdownRemark___frontmatter___cover___atimeMs'
  | 'childMarkdownRemark___frontmatter___cover___mtimeMs'
  | 'childMarkdownRemark___frontmatter___cover___ctimeMs'
  | 'childMarkdownRemark___frontmatter___cover___atime'
  | 'childMarkdownRemark___frontmatter___cover___mtime'
  | 'childMarkdownRemark___frontmatter___cover___ctime'
  | 'childMarkdownRemark___frontmatter___cover___birthtime'
  | 'childMarkdownRemark___frontmatter___cover___birthtimeMs'
  | 'childMarkdownRemark___frontmatter___cover___blksize'
  | 'childMarkdownRemark___frontmatter___cover___blocks'
  | 'childMarkdownRemark___frontmatter___cover___publicURL'
  | 'childMarkdownRemark___frontmatter___cover___childrenMarkdownRemark'
  | 'childMarkdownRemark___frontmatter___cover___childrenImageSharp'
  | 'childMarkdownRemark___frontmatter___cover___id'
  | 'childMarkdownRemark___frontmatter___cover___children'
  | 'childMarkdownRemark___frontmatter___tags'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___fields___slug'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type filegroupconnection = {
  totalCount: Scalars['Int'];
  edges: Array<fileedge>;
  nodes: Array<file>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<filegroupconnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type filegroupconnectiondistinctargs = {
  field: filefieldsenum;
};


export type filegroupconnectionmaxargs = {
  field: filefieldsenum;
};


export type filegroupconnectionminargs = {
  field: filefieldsenum;
};


export type filegroupconnectionsumargs = {
  field: filefieldsenum;
};


export type filegroupconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: filefieldsenum;
};

export type filesortinput = {
  fields?: InputMaybe<Array<InputMaybe<filefieldsenum>>>;
  order?: InputMaybe<Array<InputMaybe<sortorderenum>>>;
};

export type sortorderenum =
  | 'ASC'
  | 'DESC';

export type directoryconnection = {
  totalCount: Scalars['Int'];
  edges: Array<directoryedge>;
  nodes: Array<directory>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<directorygroupconnection>;
};


export type directoryconnectiondistinctargs = {
  field: directoryfieldsenum;
};


export type directoryconnectionmaxargs = {
  field: directoryfieldsenum;
};


export type directoryconnectionminargs = {
  field: directoryfieldsenum;
};


export type directoryconnectionsumargs = {
  field: directoryfieldsenum;
};


export type directoryconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: directoryfieldsenum;
};

export type directoryedge = {
  next?: Maybe<directory>;
  node: directory;
  previous?: Maybe<directory>;
};

export type directoryfieldsenum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type directorygroupconnection = {
  totalCount: Scalars['Int'];
  edges: Array<directoryedge>;
  nodes: Array<directory>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<directorygroupconnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type directorygroupconnectiondistinctargs = {
  field: directoryfieldsenum;
};


export type directorygroupconnectionmaxargs = {
  field: directoryfieldsenum;
};


export type directorygroupconnectionminargs = {
  field: directoryfieldsenum;
};


export type directorygroupconnectionsumargs = {
  field: directoryfieldsenum;
};


export type directorygroupconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: directoryfieldsenum;
};

export type directoryfilterinput = {
  sourceInstanceName?: InputMaybe<stringqueryoperatorinput>;
  absolutePath?: InputMaybe<stringqueryoperatorinput>;
  relativePath?: InputMaybe<stringqueryoperatorinput>;
  extension?: InputMaybe<stringqueryoperatorinput>;
  size?: InputMaybe<intqueryoperatorinput>;
  prettySize?: InputMaybe<stringqueryoperatorinput>;
  modifiedTime?: InputMaybe<datequeryoperatorinput>;
  accessTime?: InputMaybe<datequeryoperatorinput>;
  changeTime?: InputMaybe<datequeryoperatorinput>;
  birthTime?: InputMaybe<datequeryoperatorinput>;
  root?: InputMaybe<stringqueryoperatorinput>;
  dir?: InputMaybe<stringqueryoperatorinput>;
  base?: InputMaybe<stringqueryoperatorinput>;
  ext?: InputMaybe<stringqueryoperatorinput>;
  name?: InputMaybe<stringqueryoperatorinput>;
  relativeDirectory?: InputMaybe<stringqueryoperatorinput>;
  dev?: InputMaybe<intqueryoperatorinput>;
  mode?: InputMaybe<intqueryoperatorinput>;
  nlink?: InputMaybe<intqueryoperatorinput>;
  uid?: InputMaybe<intqueryoperatorinput>;
  gid?: InputMaybe<intqueryoperatorinput>;
  rdev?: InputMaybe<intqueryoperatorinput>;
  ino?: InputMaybe<floatqueryoperatorinput>;
  atimeMs?: InputMaybe<floatqueryoperatorinput>;
  mtimeMs?: InputMaybe<floatqueryoperatorinput>;
  ctimeMs?: InputMaybe<floatqueryoperatorinput>;
  atime?: InputMaybe<datequeryoperatorinput>;
  mtime?: InputMaybe<datequeryoperatorinput>;
  ctime?: InputMaybe<datequeryoperatorinput>;
  birthtime?: InputMaybe<datequeryoperatorinput>;
  birthtimeMs?: InputMaybe<floatqueryoperatorinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type directorysortinput = {
  fields?: InputMaybe<Array<InputMaybe<directoryfieldsenum>>>;
  order?: InputMaybe<Array<InputMaybe<sortorderenum>>>;
};

export type sitesitemetadatafilterinput = {
  title?: InputMaybe<stringqueryoperatorinput>;
  description?: InputMaybe<stringqueryoperatorinput>;
  siteUrl?: InputMaybe<stringqueryoperatorinput>;
  siteBaseUrl?: InputMaybe<stringqueryoperatorinput>;
  sitePathPrefix?: InputMaybe<stringqueryoperatorinput>;
  repository?: InputMaybe<stringqueryoperatorinput>;
  slogan?: InputMaybe<stringqueryoperatorinput>;
  sloganDescription?: InputMaybe<stringqueryoperatorinput>;
  social?: InputMaybe<sitesitemetadatasocialfilterinput>;
};

export type sitesitemetadatasocialfilterinput = {
  github?: InputMaybe<stringqueryoperatorinput>;
  linkedIn?: InputMaybe<stringqueryoperatorinput>;
  email?: InputMaybe<stringqueryoperatorinput>;
};

export type siteconnection = {
  totalCount: Scalars['Int'];
  edges: Array<siteedge>;
  nodes: Array<site>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<sitegroupconnection>;
};


export type siteconnectiondistinctargs = {
  field: sitefieldsenum;
};


export type siteconnectionmaxargs = {
  field: sitefieldsenum;
};


export type siteconnectionminargs = {
  field: sitefieldsenum;
};


export type siteconnectionsumargs = {
  field: sitefieldsenum;
};


export type siteconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: sitefieldsenum;
};

export type siteedge = {
  next?: Maybe<site>;
  node: site;
  previous?: Maybe<site>;
};

export type sitefieldsenum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___siteBaseUrl'
  | 'siteMetadata___sitePathPrefix'
  | 'siteMetadata___repository'
  | 'siteMetadata___slogan'
  | 'siteMetadata___sloganDescription'
  | 'siteMetadata___social___github'
  | 'siteMetadata___social___linkedIn'
  | 'siteMetadata___social___email'
  | 'pathPrefix'
  | 'polyfill'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type sitegroupconnection = {
  totalCount: Scalars['Int'];
  edges: Array<siteedge>;
  nodes: Array<site>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<sitegroupconnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type sitegroupconnectiondistinctargs = {
  field: sitefieldsenum;
};


export type sitegroupconnectionmaxargs = {
  field: sitefieldsenum;
};


export type sitegroupconnectionminargs = {
  field: sitefieldsenum;
};


export type sitegroupconnectionsumargs = {
  field: sitefieldsenum;
};


export type sitegroupconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: sitefieldsenum;
};

export type sitefilterinput = {
  buildTime?: InputMaybe<datequeryoperatorinput>;
  siteMetadata?: InputMaybe<sitesitemetadatafilterinput>;
  pathPrefix?: InputMaybe<stringqueryoperatorinput>;
  polyfill?: InputMaybe<booleanqueryoperatorinput>;
  jsxRuntime?: InputMaybe<stringqueryoperatorinput>;
  trailingSlash?: InputMaybe<stringqueryoperatorinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type sitesortinput = {
  fields?: InputMaybe<Array<InputMaybe<sitefieldsenum>>>;
  order?: InputMaybe<Array<InputMaybe<sortorderenum>>>;
};

export type sitefunctionconnection = {
  totalCount: Scalars['Int'];
  edges: Array<sitefunctionedge>;
  nodes: Array<sitefunction>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<sitefunctiongroupconnection>;
};


export type sitefunctionconnectiondistinctargs = {
  field: sitefunctionfieldsenum;
};


export type sitefunctionconnectionmaxargs = {
  field: sitefunctionfieldsenum;
};


export type sitefunctionconnectionminargs = {
  field: sitefunctionfieldsenum;
};


export type sitefunctionconnectionsumargs = {
  field: sitefunctionfieldsenum;
};


export type sitefunctionconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: sitefunctionfieldsenum;
};

export type sitefunctionedge = {
  next?: Maybe<sitefunction>;
  node: sitefunction;
  previous?: Maybe<sitefunction>;
};

export type sitefunctionfieldsenum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type sitefunctiongroupconnection = {
  totalCount: Scalars['Int'];
  edges: Array<sitefunctionedge>;
  nodes: Array<sitefunction>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<sitefunctiongroupconnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type sitefunctiongroupconnectiondistinctargs = {
  field: sitefunctionfieldsenum;
};


export type sitefunctiongroupconnectionmaxargs = {
  field: sitefunctionfieldsenum;
};


export type sitefunctiongroupconnectionminargs = {
  field: sitefunctionfieldsenum;
};


export type sitefunctiongroupconnectionsumargs = {
  field: sitefunctionfieldsenum;
};


export type sitefunctiongroupconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: sitefunctionfieldsenum;
};

export type sitefunctionfilterinput = {
  functionRoute?: InputMaybe<stringqueryoperatorinput>;
  pluginName?: InputMaybe<stringqueryoperatorinput>;
  originalAbsoluteFilePath?: InputMaybe<stringqueryoperatorinput>;
  originalRelativeFilePath?: InputMaybe<stringqueryoperatorinput>;
  relativeCompiledFilePath?: InputMaybe<stringqueryoperatorinput>;
  absoluteCompiledFilePath?: InputMaybe<stringqueryoperatorinput>;
  matchPath?: InputMaybe<stringqueryoperatorinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type sitefunctionsortinput = {
  fields?: InputMaybe<Array<InputMaybe<sitefunctionfieldsenum>>>;
  order?: InputMaybe<Array<InputMaybe<sortorderenum>>>;
};

export type sitepluginfilterinput = {
  resolve?: InputMaybe<stringqueryoperatorinput>;
  name?: InputMaybe<stringqueryoperatorinput>;
  version?: InputMaybe<stringqueryoperatorinput>;
  nodeAPIs?: InputMaybe<stringqueryoperatorinput>;
  browserAPIs?: InputMaybe<stringqueryoperatorinput>;
  ssrAPIs?: InputMaybe<stringqueryoperatorinput>;
  pluginFilepath?: InputMaybe<stringqueryoperatorinput>;
  pluginOptions?: InputMaybe<jsonqueryoperatorinput>;
  packageJson?: InputMaybe<jsonqueryoperatorinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type sitepageconnection = {
  totalCount: Scalars['Int'];
  edges: Array<sitepageedge>;
  nodes: Array<sitepage>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<sitepagegroupconnection>;
};


export type sitepageconnectiondistinctargs = {
  field: sitepagefieldsenum;
};


export type sitepageconnectionmaxargs = {
  field: sitepagefieldsenum;
};


export type sitepageconnectionminargs = {
  field: sitepagefieldsenum;
};


export type sitepageconnectionsumargs = {
  field: sitepagefieldsenum;
};


export type sitepageconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: sitepagefieldsenum;
};

export type sitepageedge = {
  next?: Maybe<sitepage>;
  node: sitepage;
  previous?: Maybe<sitepage>;
};

export type sitepagefieldsenum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type sitepagegroupconnection = {
  totalCount: Scalars['Int'];
  edges: Array<sitepageedge>;
  nodes: Array<sitepage>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<sitepagegroupconnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type sitepagegroupconnectiondistinctargs = {
  field: sitepagefieldsenum;
};


export type sitepagegroupconnectionmaxargs = {
  field: sitepagefieldsenum;
};


export type sitepagegroupconnectionminargs = {
  field: sitepagefieldsenum;
};


export type sitepagegroupconnectionsumargs = {
  field: sitepagefieldsenum;
};


export type sitepagegroupconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: sitepagefieldsenum;
};

export type sitepagefilterinput = {
  path?: InputMaybe<stringqueryoperatorinput>;
  component?: InputMaybe<stringqueryoperatorinput>;
  internalComponentName?: InputMaybe<stringqueryoperatorinput>;
  componentChunkName?: InputMaybe<stringqueryoperatorinput>;
  matchPath?: InputMaybe<stringqueryoperatorinput>;
  pageContext?: InputMaybe<jsonqueryoperatorinput>;
  pluginCreator?: InputMaybe<sitepluginfilterinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type sitepagesortinput = {
  fields?: InputMaybe<Array<InputMaybe<sitepagefieldsenum>>>;
  order?: InputMaybe<Array<InputMaybe<sortorderenum>>>;
};

export type sitepluginconnection = {
  totalCount: Scalars['Int'];
  edges: Array<sitepluginedge>;
  nodes: Array<siteplugin>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<siteplugingroupconnection>;
};


export type sitepluginconnectiondistinctargs = {
  field: sitepluginfieldsenum;
};


export type sitepluginconnectionmaxargs = {
  field: sitepluginfieldsenum;
};


export type sitepluginconnectionminargs = {
  field: sitepluginfieldsenum;
};


export type sitepluginconnectionsumargs = {
  field: sitepluginfieldsenum;
};


export type sitepluginconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: sitepluginfieldsenum;
};

export type sitepluginedge = {
  next?: Maybe<siteplugin>;
  node: siteplugin;
  previous?: Maybe<siteplugin>;
};

export type sitepluginfieldsenum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type siteplugingroupconnection = {
  totalCount: Scalars['Int'];
  edges: Array<sitepluginedge>;
  nodes: Array<siteplugin>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<siteplugingroupconnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type siteplugingroupconnectiondistinctargs = {
  field: sitepluginfieldsenum;
};


export type siteplugingroupconnectionmaxargs = {
  field: sitepluginfieldsenum;
};


export type siteplugingroupconnectionminargs = {
  field: sitepluginfieldsenum;
};


export type siteplugingroupconnectionsumargs = {
  field: sitepluginfieldsenum;
};


export type siteplugingroupconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: sitepluginfieldsenum;
};

export type sitepluginsortinput = {
  fields?: InputMaybe<Array<InputMaybe<sitepluginfieldsenum>>>;
  order?: InputMaybe<Array<InputMaybe<sortorderenum>>>;
};

export type sitebuildmetadataconnection = {
  totalCount: Scalars['Int'];
  edges: Array<sitebuildmetadataedge>;
  nodes: Array<sitebuildmetadata>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<sitebuildmetadatagroupconnection>;
};


export type sitebuildmetadataconnectiondistinctargs = {
  field: sitebuildmetadatafieldsenum;
};


export type sitebuildmetadataconnectionmaxargs = {
  field: sitebuildmetadatafieldsenum;
};


export type sitebuildmetadataconnectionminargs = {
  field: sitebuildmetadatafieldsenum;
};


export type sitebuildmetadataconnectionsumargs = {
  field: sitebuildmetadatafieldsenum;
};


export type sitebuildmetadataconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: sitebuildmetadatafieldsenum;
};

export type sitebuildmetadataedge = {
  next?: Maybe<sitebuildmetadata>;
  node: sitebuildmetadata;
  previous?: Maybe<sitebuildmetadata>;
};

export type sitebuildmetadatafieldsenum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type sitebuildmetadatagroupconnection = {
  totalCount: Scalars['Int'];
  edges: Array<sitebuildmetadataedge>;
  nodes: Array<sitebuildmetadata>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<sitebuildmetadatagroupconnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type sitebuildmetadatagroupconnectiondistinctargs = {
  field: sitebuildmetadatafieldsenum;
};


export type sitebuildmetadatagroupconnectionmaxargs = {
  field: sitebuildmetadatafieldsenum;
};


export type sitebuildmetadatagroupconnectionminargs = {
  field: sitebuildmetadatafieldsenum;
};


export type sitebuildmetadatagroupconnectionsumargs = {
  field: sitebuildmetadatafieldsenum;
};


export type sitebuildmetadatagroupconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: sitebuildmetadatafieldsenum;
};

export type sitebuildmetadatafilterinput = {
  buildTime?: InputMaybe<datequeryoperatorinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type sitebuildmetadatasortinput = {
  fields?: InputMaybe<Array<InputMaybe<sitebuildmetadatafieldsenum>>>;
  order?: InputMaybe<Array<InputMaybe<sortorderenum>>>;
};

export type markdownremarkconnection = {
  totalCount: Scalars['Int'];
  edges: Array<markdownremarkedge>;
  nodes: Array<markdownremark>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<markdownremarkgroupconnection>;
};


export type markdownremarkconnectiondistinctargs = {
  field: markdownremarkfieldsenum;
};


export type markdownremarkconnectionmaxargs = {
  field: markdownremarkfieldsenum;
};


export type markdownremarkconnectionminargs = {
  field: markdownremarkfieldsenum;
};


export type markdownremarkconnectionsumargs = {
  field: markdownremarkfieldsenum;
};


export type markdownremarkconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: markdownremarkfieldsenum;
};

export type markdownremarkedge = {
  next?: Maybe<markdownremark>;
  node: markdownremark;
  previous?: Maybe<markdownremark>;
};

export type markdownremarkfieldsenum =
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___categories'
  | 'frontmatter___cover___sourceInstanceName'
  | 'frontmatter___cover___absolutePath'
  | 'frontmatter___cover___relativePath'
  | 'frontmatter___cover___extension'
  | 'frontmatter___cover___size'
  | 'frontmatter___cover___prettySize'
  | 'frontmatter___cover___modifiedTime'
  | 'frontmatter___cover___accessTime'
  | 'frontmatter___cover___changeTime'
  | 'frontmatter___cover___birthTime'
  | 'frontmatter___cover___root'
  | 'frontmatter___cover___dir'
  | 'frontmatter___cover___base'
  | 'frontmatter___cover___ext'
  | 'frontmatter___cover___name'
  | 'frontmatter___cover___relativeDirectory'
  | 'frontmatter___cover___dev'
  | 'frontmatter___cover___mode'
  | 'frontmatter___cover___nlink'
  | 'frontmatter___cover___uid'
  | 'frontmatter___cover___gid'
  | 'frontmatter___cover___rdev'
  | 'frontmatter___cover___ino'
  | 'frontmatter___cover___atimeMs'
  | 'frontmatter___cover___mtimeMs'
  | 'frontmatter___cover___ctimeMs'
  | 'frontmatter___cover___atime'
  | 'frontmatter___cover___mtime'
  | 'frontmatter___cover___ctime'
  | 'frontmatter___cover___birthtime'
  | 'frontmatter___cover___birthtimeMs'
  | 'frontmatter___cover___blksize'
  | 'frontmatter___cover___blocks'
  | 'frontmatter___cover___publicURL'
  | 'frontmatter___cover___childrenMarkdownRemark'
  | 'frontmatter___cover___childrenMarkdownRemark___id'
  | 'frontmatter___cover___childrenMarkdownRemark___excerpt'
  | 'frontmatter___cover___childrenMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___cover___childrenMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___cover___childrenMarkdownRemark___html'
  | 'frontmatter___cover___childrenMarkdownRemark___htmlAst'
  | 'frontmatter___cover___childrenMarkdownRemark___excerptAst'
  | 'frontmatter___cover___childrenMarkdownRemark___headings'
  | 'frontmatter___cover___childrenMarkdownRemark___timeToRead'
  | 'frontmatter___cover___childrenMarkdownRemark___tableOfContents'
  | 'frontmatter___cover___childrenMarkdownRemark___children'
  | 'frontmatter___cover___childMarkdownRemark___id'
  | 'frontmatter___cover___childMarkdownRemark___excerpt'
  | 'frontmatter___cover___childMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___cover___childMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___cover___childMarkdownRemark___html'
  | 'frontmatter___cover___childMarkdownRemark___htmlAst'
  | 'frontmatter___cover___childMarkdownRemark___excerptAst'
  | 'frontmatter___cover___childMarkdownRemark___headings'
  | 'frontmatter___cover___childMarkdownRemark___timeToRead'
  | 'frontmatter___cover___childMarkdownRemark___tableOfContents'
  | 'frontmatter___cover___childMarkdownRemark___children'
  | 'frontmatter___cover___childrenImageSharp'
  | 'frontmatter___cover___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___cover___childrenImageSharp___id'
  | 'frontmatter___cover___childrenImageSharp___children'
  | 'frontmatter___cover___childImageSharp___gatsbyImageData'
  | 'frontmatter___cover___childImageSharp___id'
  | 'frontmatter___cover___childImageSharp___children'
  | 'frontmatter___cover___id'
  | 'frontmatter___cover___parent___id'
  | 'frontmatter___cover___parent___children'
  | 'frontmatter___cover___children'
  | 'frontmatter___cover___children___id'
  | 'frontmatter___cover___children___children'
  | 'frontmatter___cover___internal___content'
  | 'frontmatter___cover___internal___contentDigest'
  | 'frontmatter___cover___internal___description'
  | 'frontmatter___cover___internal___fieldOwners'
  | 'frontmatter___cover___internal___ignoreType'
  | 'frontmatter___cover___internal___mediaType'
  | 'frontmatter___cover___internal___owner'
  | 'frontmatter___cover___internal___type'
  | 'frontmatter___tags'
  | 'frontmatter___date'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'fields___slug'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type markdownremarkgroupconnection = {
  totalCount: Scalars['Int'];
  edges: Array<markdownremarkedge>;
  nodes: Array<markdownremark>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<markdownremarkgroupconnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type markdownremarkgroupconnectiondistinctargs = {
  field: markdownremarkfieldsenum;
};


export type markdownremarkgroupconnectionmaxargs = {
  field: markdownremarkfieldsenum;
};


export type markdownremarkgroupconnectionminargs = {
  field: markdownremarkfieldsenum;
};


export type markdownremarkgroupconnectionsumargs = {
  field: markdownremarkfieldsenum;
};


export type markdownremarkgroupconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: markdownremarkfieldsenum;
};

export type markdownremarksortinput = {
  fields?: InputMaybe<Array<InputMaybe<markdownremarkfieldsenum>>>;
  order?: InputMaybe<Array<InputMaybe<sortorderenum>>>;
};

export type grvscthemefilterinput = {
  path?: InputMaybe<stringqueryoperatorinput>;
  identifier?: InputMaybe<stringqueryoperatorinput>;
  conditions?: InputMaybe<grvscthemeconditionfilterlistinput>;
};

export type grvscthemeconditionfilterlistinput = {
  elemMatch?: InputMaybe<grvscthemeconditionfilterinput>;
};

export type grvscthemeconditionfilterinput = {
  condition?: InputMaybe<grvscthemeconditionkindqueryoperatorinput>;
  value?: InputMaybe<stringqueryoperatorinput>;
};

export type grvscthemeconditionkindqueryoperatorinput = {
  eq?: InputMaybe<grvscthemeconditionkind>;
  ne?: InputMaybe<grvscthemeconditionkind>;
  in?: InputMaybe<Array<InputMaybe<grvscthemeconditionkind>>>;
  nin?: InputMaybe<Array<InputMaybe<grvscthemeconditionkind>>>;
};

export type grvscthemefilterlistinput = {
  elemMatch?: InputMaybe<grvscthemefilterinput>;
};

export type grvsctokenizedlinefilterlistinput = {
  elemMatch?: InputMaybe<grvsctokenizedlinefilterinput>;
};

export type grvsctokenizedlinefilterinput = {
  tokens?: InputMaybe<grvsctokenfilterlistinput>;
  gutterCells?: InputMaybe<grvscguttercellfilterlistinput>;
  text?: InputMaybe<stringqueryoperatorinput>;
  html?: InputMaybe<stringqueryoperatorinput>;
  attrs?: InputMaybe<jsonqueryoperatorinput>;
  className?: InputMaybe<stringqueryoperatorinput>;
  data?: InputMaybe<jsonqueryoperatorinput>;
  isHighlighted?: InputMaybe<booleanqueryoperatorinput>;
  lineNumber?: InputMaybe<intqueryoperatorinput>;
  diff?: InputMaybe<grvscdiffqueryoperatorinput>;
};

export type grvsctokenfilterlistinput = {
  elemMatch?: InputMaybe<grvsctokenfilterinput>;
};

export type grvsctokenfilterinput = {
  text?: InputMaybe<stringqueryoperatorinput>;
  startIndex?: InputMaybe<intqueryoperatorinput>;
  endIndex?: InputMaybe<intqueryoperatorinput>;
  scopes?: InputMaybe<stringqueryoperatorinput>;
  html?: InputMaybe<stringqueryoperatorinput>;
  className?: InputMaybe<stringqueryoperatorinput>;
  defaultThemeTokenData?: InputMaybe<grvscthemetokendatafilterinput>;
  additionalThemeTokenData?: InputMaybe<grvscthemetokendatafilterlistinput>;
};

export type grvscthemetokendatafilterinput = {
  themeIdentifier?: InputMaybe<stringqueryoperatorinput>;
  className?: InputMaybe<stringqueryoperatorinput>;
  meta?: InputMaybe<intqueryoperatorinput>;
  color?: InputMaybe<stringqueryoperatorinput>;
  bold?: InputMaybe<booleanqueryoperatorinput>;
  italic?: InputMaybe<booleanqueryoperatorinput>;
  underline?: InputMaybe<booleanqueryoperatorinput>;
};

export type grvscthemetokendatafilterlistinput = {
  elemMatch?: InputMaybe<grvscthemetokendatafilterinput>;
};

export type grvscguttercellfilterlistinput = {
  elemMatch?: InputMaybe<grvscguttercellfilterinput>;
};

export type grvscguttercellfilterinput = {
  className?: InputMaybe<stringqueryoperatorinput>;
  text?: InputMaybe<stringqueryoperatorinput>;
};

export type grvscdiffqueryoperatorinput = {
  eq?: InputMaybe<grvscdiff>;
  ne?: InputMaybe<grvscdiff>;
  in?: InputMaybe<Array<InputMaybe<grvscdiff>>>;
  nin?: InputMaybe<Array<InputMaybe<grvscdiff>>>;
};

export type grvsccodeblockconnection = {
  totalCount: Scalars['Int'];
  edges: Array<grvsccodeblockedge>;
  nodes: Array<grvsccodeblock>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<grvsccodeblockgroupconnection>;
};


export type grvsccodeblockconnectiondistinctargs = {
  field: grvsccodeblockfieldsenum;
};


export type grvsccodeblockconnectionmaxargs = {
  field: grvsccodeblockfieldsenum;
};


export type grvsccodeblockconnectionminargs = {
  field: grvsccodeblockfieldsenum;
};


export type grvsccodeblockconnectionsumargs = {
  field: grvsccodeblockfieldsenum;
};


export type grvsccodeblockconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: grvsccodeblockfieldsenum;
};

export type grvsccodeblockedge = {
  next?: Maybe<grvsccodeblock>;
  node: grvsccodeblock;
  previous?: Maybe<grvsccodeblock>;
};

export type grvsccodeblockfieldsenum =
  | 'index'
  | 'html'
  | 'text'
  | 'preClassName'
  | 'codeClassName'
  | 'language'
  | 'meta'
  | 'defaultTheme___path'
  | 'defaultTheme___identifier'
  | 'defaultTheme___conditions'
  | 'defaultTheme___conditions___condition'
  | 'defaultTheme___conditions___value'
  | 'additionalThemes'
  | 'additionalThemes___path'
  | 'additionalThemes___identifier'
  | 'additionalThemes___conditions'
  | 'additionalThemes___conditions___condition'
  | 'additionalThemes___conditions___value'
  | 'tokenizedLines'
  | 'tokenizedLines___tokens'
  | 'tokenizedLines___tokens___text'
  | 'tokenizedLines___tokens___startIndex'
  | 'tokenizedLines___tokens___endIndex'
  | 'tokenizedLines___tokens___scopes'
  | 'tokenizedLines___tokens___html'
  | 'tokenizedLines___tokens___className'
  | 'tokenizedLines___tokens___defaultThemeTokenData___themeIdentifier'
  | 'tokenizedLines___tokens___defaultThemeTokenData___className'
  | 'tokenizedLines___tokens___defaultThemeTokenData___meta'
  | 'tokenizedLines___tokens___defaultThemeTokenData___color'
  | 'tokenizedLines___tokens___defaultThemeTokenData___bold'
  | 'tokenizedLines___tokens___defaultThemeTokenData___italic'
  | 'tokenizedLines___tokens___defaultThemeTokenData___underline'
  | 'tokenizedLines___tokens___additionalThemeTokenData'
  | 'tokenizedLines___tokens___additionalThemeTokenData___themeIdentifier'
  | 'tokenizedLines___tokens___additionalThemeTokenData___className'
  | 'tokenizedLines___tokens___additionalThemeTokenData___meta'
  | 'tokenizedLines___tokens___additionalThemeTokenData___color'
  | 'tokenizedLines___tokens___additionalThemeTokenData___bold'
  | 'tokenizedLines___tokens___additionalThemeTokenData___italic'
  | 'tokenizedLines___tokens___additionalThemeTokenData___underline'
  | 'tokenizedLines___gutterCells'
  | 'tokenizedLines___gutterCells___className'
  | 'tokenizedLines___gutterCells___text'
  | 'tokenizedLines___text'
  | 'tokenizedLines___html'
  | 'tokenizedLines___attrs'
  | 'tokenizedLines___className'
  | 'tokenizedLines___data'
  | 'tokenizedLines___isHighlighted'
  | 'tokenizedLines___lineNumber'
  | 'tokenizedLines___diff'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type grvsccodeblockgroupconnection = {
  totalCount: Scalars['Int'];
  edges: Array<grvsccodeblockedge>;
  nodes: Array<grvsccodeblock>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<grvsccodeblockgroupconnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type grvsccodeblockgroupconnectiondistinctargs = {
  field: grvsccodeblockfieldsenum;
};


export type grvsccodeblockgroupconnectionmaxargs = {
  field: grvsccodeblockfieldsenum;
};


export type grvsccodeblockgroupconnectionminargs = {
  field: grvsccodeblockfieldsenum;
};


export type grvsccodeblockgroupconnectionsumargs = {
  field: grvsccodeblockfieldsenum;
};


export type grvsccodeblockgroupconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: grvsccodeblockfieldsenum;
};

export type grvsccodeblockfilterinput = {
  index?: InputMaybe<intqueryoperatorinput>;
  html?: InputMaybe<stringqueryoperatorinput>;
  text?: InputMaybe<stringqueryoperatorinput>;
  preClassName?: InputMaybe<stringqueryoperatorinput>;
  codeClassName?: InputMaybe<stringqueryoperatorinput>;
  language?: InputMaybe<stringqueryoperatorinput>;
  meta?: InputMaybe<jsonqueryoperatorinput>;
  defaultTheme?: InputMaybe<grvscthemefilterinput>;
  additionalThemes?: InputMaybe<grvscthemefilterlistinput>;
  tokenizedLines?: InputMaybe<grvsctokenizedlinefilterlistinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type grvsccodeblocksortinput = {
  fields?: InputMaybe<Array<InputMaybe<grvsccodeblockfieldsenum>>>;
  order?: InputMaybe<Array<InputMaybe<sortorderenum>>>;
};

export type grvsccodespanconnection = {
  totalCount: Scalars['Int'];
  edges: Array<grvsccodespanedge>;
  nodes: Array<grvsccodespan>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<grvsccodespangroupconnection>;
};


export type grvsccodespanconnectiondistinctargs = {
  field: grvsccodespanfieldsenum;
};


export type grvsccodespanconnectionmaxargs = {
  field: grvsccodespanfieldsenum;
};


export type grvsccodespanconnectionminargs = {
  field: grvsccodespanfieldsenum;
};


export type grvsccodespanconnectionsumargs = {
  field: grvsccodespanfieldsenum;
};


export type grvsccodespanconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: grvsccodespanfieldsenum;
};

export type grvsccodespanedge = {
  next?: Maybe<grvsccodespan>;
  node: grvsccodespan;
  previous?: Maybe<grvsccodespan>;
};

export type grvsccodespanfieldsenum =
  | 'index'
  | 'html'
  | 'text'
  | 'className'
  | 'language'
  | 'defaultTheme___path'
  | 'defaultTheme___identifier'
  | 'defaultTheme___conditions'
  | 'defaultTheme___conditions___condition'
  | 'defaultTheme___conditions___value'
  | 'additionalThemes'
  | 'additionalThemes___path'
  | 'additionalThemes___identifier'
  | 'additionalThemes___conditions'
  | 'additionalThemes___conditions___condition'
  | 'additionalThemes___conditions___value'
  | 'tokens'
  | 'tokens___text'
  | 'tokens___startIndex'
  | 'tokens___endIndex'
  | 'tokens___scopes'
  | 'tokens___html'
  | 'tokens___className'
  | 'tokens___defaultThemeTokenData___themeIdentifier'
  | 'tokens___defaultThemeTokenData___className'
  | 'tokens___defaultThemeTokenData___meta'
  | 'tokens___defaultThemeTokenData___color'
  | 'tokens___defaultThemeTokenData___bold'
  | 'tokens___defaultThemeTokenData___italic'
  | 'tokens___defaultThemeTokenData___underline'
  | 'tokens___additionalThemeTokenData'
  | 'tokens___additionalThemeTokenData___themeIdentifier'
  | 'tokens___additionalThemeTokenData___className'
  | 'tokens___additionalThemeTokenData___meta'
  | 'tokens___additionalThemeTokenData___color'
  | 'tokens___additionalThemeTokenData___bold'
  | 'tokens___additionalThemeTokenData___italic'
  | 'tokens___additionalThemeTokenData___underline'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type grvsccodespangroupconnection = {
  totalCount: Scalars['Int'];
  edges: Array<grvsccodespanedge>;
  nodes: Array<grvsccodespan>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<grvsccodespangroupconnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type grvsccodespangroupconnectiondistinctargs = {
  field: grvsccodespanfieldsenum;
};


export type grvsccodespangroupconnectionmaxargs = {
  field: grvsccodespanfieldsenum;
};


export type grvsccodespangroupconnectionminargs = {
  field: grvsccodespanfieldsenum;
};


export type grvsccodespangroupconnectionsumargs = {
  field: grvsccodespanfieldsenum;
};


export type grvsccodespangroupconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: grvsccodespanfieldsenum;
};

export type grvsccodespanfilterinput = {
  index?: InputMaybe<intqueryoperatorinput>;
  html?: InputMaybe<stringqueryoperatorinput>;
  text?: InputMaybe<stringqueryoperatorinput>;
  className?: InputMaybe<stringqueryoperatorinput>;
  language?: InputMaybe<stringqueryoperatorinput>;
  defaultTheme?: InputMaybe<grvscthemefilterinput>;
  additionalThemes?: InputMaybe<grvscthemefilterlistinput>;
  tokens?: InputMaybe<grvsctokenfilterlistinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type grvsccodespansortinput = {
  fields?: InputMaybe<Array<InputMaybe<grvsccodespanfieldsenum>>>;
  order?: InputMaybe<Array<InputMaybe<sortorderenum>>>;
};

export type grvscstylesheetconnection = {
  totalCount: Scalars['Int'];
  edges: Array<grvscstylesheetedge>;
  nodes: Array<grvscstylesheet>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<grvscstylesheetgroupconnection>;
};


export type grvscstylesheetconnectiondistinctargs = {
  field: grvscstylesheetfieldsenum;
};


export type grvscstylesheetconnectionmaxargs = {
  field: grvscstylesheetfieldsenum;
};


export type grvscstylesheetconnectionminargs = {
  field: grvscstylesheetfieldsenum;
};


export type grvscstylesheetconnectionsumargs = {
  field: grvscstylesheetfieldsenum;
};


export type grvscstylesheetconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: grvscstylesheetfieldsenum;
};

export type grvscstylesheetedge = {
  next?: Maybe<grvscstylesheet>;
  node: grvscstylesheet;
  previous?: Maybe<grvscstylesheet>;
};

export type grvscstylesheetfieldsenum =
  | 'css'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type grvscstylesheetgroupconnection = {
  totalCount: Scalars['Int'];
  edges: Array<grvscstylesheetedge>;
  nodes: Array<grvscstylesheet>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<grvscstylesheetgroupconnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type grvscstylesheetgroupconnectiondistinctargs = {
  field: grvscstylesheetfieldsenum;
};


export type grvscstylesheetgroupconnectionmaxargs = {
  field: grvscstylesheetfieldsenum;
};


export type grvscstylesheetgroupconnectionminargs = {
  field: grvscstylesheetfieldsenum;
};


export type grvscstylesheetgroupconnectionsumargs = {
  field: grvscstylesheetfieldsenum;
};


export type grvscstylesheetgroupconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: grvscstylesheetfieldsenum;
};

export type grvscstylesheetfilterinput = {
  css?: InputMaybe<stringqueryoperatorinput>;
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
};

export type grvscstylesheetsortinput = {
  fields?: InputMaybe<Array<InputMaybe<grvscstylesheetfieldsenum>>>;
  order?: InputMaybe<Array<InputMaybe<sortorderenum>>>;
};

export type imagesharpconnection = {
  totalCount: Scalars['Int'];
  edges: Array<imagesharpedge>;
  nodes: Array<imagesharp>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<imagesharpgroupconnection>;
};


export type imagesharpconnectiondistinctargs = {
  field: imagesharpfieldsenum;
};


export type imagesharpconnectionmaxargs = {
  field: imagesharpfieldsenum;
};


export type imagesharpconnectionminargs = {
  field: imagesharpfieldsenum;
};


export type imagesharpconnectionsumargs = {
  field: imagesharpfieldsenum;
};


export type imagesharpconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: imagesharpfieldsenum;
};

export type imagesharpedge = {
  next?: Maybe<imagesharp>;
  node: imagesharp;
  previous?: Maybe<imagesharp>;
};

export type imagesharpfieldsenum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type imagesharpgroupconnection = {
  totalCount: Scalars['Int'];
  edges: Array<imagesharpedge>;
  nodes: Array<imagesharp>;
  pageInfo: pageinfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<imagesharpgroupconnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type imagesharpgroupconnectiondistinctargs = {
  field: imagesharpfieldsenum;
};


export type imagesharpgroupconnectionmaxargs = {
  field: imagesharpfieldsenum;
};


export type imagesharpgroupconnectionminargs = {
  field: imagesharpfieldsenum;
};


export type imagesharpgroupconnectionsumargs = {
  field: imagesharpfieldsenum;
};


export type imagesharpgroupconnectiongroupargs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: imagesharpfieldsenum;
};

export type imagesharpsortinput = {
  fields?: InputMaybe<Array<InputMaybe<imagesharpfieldsenum>>>;
  order?: InputMaybe<Array<InputMaybe<sortorderenum>>>;
};

export type GetPostsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsDataQuery = { posts: { edges: Array<{ node: { id: string, fields?: { slug?: string | null } | null }, next?: { id: string } | null, previous?: { id: string } | null }> }, categories: { group: Array<{ fieldValue?: string | null, totalCount: number }> } };

export type GetPostListQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  categoryQuery?: InputMaybe<Scalars['String']>;
}>;


export type GetPostListQuery = { defaultPosts: { edges: Array<{ node: { excerpt?: string | null, timeToRead?: number | null, id: string, fields?: { slug?: string | null } | null, frontmatter?: { title?: string | null, categories?: Array<string | null> | null, date?: any | null, cover?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } }> }, categoryPosts: { edges: Array<{ node: { excerpt?: string | null, timeToRead?: number | null, id: string, fields?: { slug?: string | null } | null, frontmatter?: { title?: string | null, categories?: Array<string | null> | null, date?: any | null, cover?: { childImageSharp?: { gatsbyImageData: any } | null } | null } | null } }> } };

export type GatsbyImageSharpFixedFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null };

export type GatsbyImageSharpFluidFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null, srcSetWebp?: string | null, sizes: string };
