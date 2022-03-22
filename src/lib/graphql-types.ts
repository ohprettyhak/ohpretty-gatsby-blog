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
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
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
  slogan?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
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
  path?: Maybe<Scalars['String']>;
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
  port?: InputMaybe<intqueryoperatorinput>;
  host?: InputMaybe<stringqueryoperatorinput>;
  polyfill?: InputMaybe<booleanqueryoperatorinput>;
  pathPrefix?: InputMaybe<stringqueryoperatorinput>;
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
  path?: InputMaybe<stringqueryoperatorinput>;
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
  id?: InputMaybe<stringqueryoperatorinput>;
  parent?: InputMaybe<nodefilterinput>;
  children?: InputMaybe<nodefilterlistinput>;
  internal?: InputMaybe<internalfilterinput>;
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

export type jsonqueryoperatorinput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
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
  | 'childrenMarkdownRemark___frontmatter___path'
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
  | 'childrenMarkdownRemark___frontmatter___cover___id'
  | 'childrenMarkdownRemark___frontmatter___cover___children'
  | 'childrenMarkdownRemark___frontmatter___tags'
  | 'childrenMarkdownRemark___frontmatter___date'
  | 'childrenMarkdownRemark___excerpt'
  | 'childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenMarkdownRemark___fileAbsolutePath'
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
  | 'childMarkdownRemark___frontmatter___path'
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
  | 'childMarkdownRemark___frontmatter___cover___id'
  | 'childMarkdownRemark___frontmatter___cover___children'
  | 'childMarkdownRemark___frontmatter___tags'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
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
  slogan?: InputMaybe<stringqueryoperatorinput>;
  github?: InputMaybe<stringqueryoperatorinput>;
  siteUrl?: InputMaybe<stringqueryoperatorinput>;
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
  | 'siteMetadata___slogan'
  | 'siteMetadata___github'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
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
  port?: InputMaybe<intqueryoperatorinput>;
  host?: InputMaybe<stringqueryoperatorinput>;
  polyfill?: InputMaybe<booleanqueryoperatorinput>;
  pathPrefix?: InputMaybe<stringqueryoperatorinput>;
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
  | 'frontmatter___path'
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

export type GetPostsDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsDataQuery = { posts: { edges: Array<{ node: { id: string, frontmatter?: { path?: string | null } | null }, next?: { id: string } | null, previous?: { id: string } | null }> }, categories: { group: Array<{ fieldValue?: string | null, totalCount: number }> } };
