export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  authors: Array<Author>;
  me?: Maybe<Author>;
  validateToken?: Maybe<CreateAuthorResponse>;
  media: MediaNode;
  /** Used to query a single post */
  post?: Maybe<Post>;
  /** Used to query a collection of posts */
  posts: PostsNode;
  adjacentPosts?: Maybe<AdjacentPosts>;
  search?: Maybe<SearchOutput>;
  stats?: Maybe<Stats>;
  roles: Array<Role>;
  globalSearch?: Maybe<SearchResponse>;
  settings: Setting;
  taxonomies: Array<Taxonomy>;
  themes: Array<Theme>;
};


export type QueryAuthorArgs = {
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
};


export type QueryMediaArgs = {
  filters?: Maybe<MediaFilters>;
};


export type QueryPostArgs = {
  filters?: Maybe<PostFilters>;
};


export type QueryPostsArgs = {
  filters?: Maybe<PostsFilters>;
};


export type QueryAdjacentPostsArgs = {
  slug?: Maybe<Scalars['String']>;
};


export type QuerySearchArgs = {
  filters: SearchFilters;
};


export type QueryGlobalSearchArgs = {
  keyword?: Maybe<Scalars['String']>;
};


export type QuerySettingsArgs = {
  option?: Maybe<Scalars['String']>;
};


export type QueryTaxonomiesArgs = {
  filters?: Maybe<TaxonomyFilters>;
};


export type QueryThemesArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  social?: Maybe<TypeSocial>;
  role?: Maybe<Role>;
  bio?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type TypeSocial = {
  __typename?: 'TypeSocial';
  github?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
};

export type Role = {
  __typename?: 'Role';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<EnumRoles>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
};

export enum EnumRoles {
  Admin = 'ADMIN',
  Reviewer = 'REVIEWER',
  Author = 'AUTHOR',
  Reader = 'READER'
}

export type Permission = {
  __typename?: 'Permission';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type CreateAuthorResponse = {
  __typename?: 'CreateAuthorResponse';
  ok: Scalars['Boolean'];
  errors?: Maybe<Array<Error>>;
};

export type Error = {
  __typename?: 'Error';
  path: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type MediaFilters = {
  id?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['Int']>;
};

export type MediaNode = {
  __typename?: 'MediaNode';
  count: Scalars['Int'];
  rows: Array<Media>;
};

export type Media = {
  __typename?: 'Media';
  id: Scalars['Int'];
  authorId?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
  createdAt: Scalars['Date'];
  name?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
};


export type PostFilters = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  previewHash?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  /** Primary key */
  id: Scalars['Int'];
  /** Title of the post */
  title: Scalars['String'];
  /** Html content of the post */
  html: Scalars['String'];
  /** Markdown content of the post */
  md: Scalars['String'];
  /** Draft for republishing content */
  md_draft: Scalars['String'];
  /** Author information of the post */
  author: Author;
  /** A breif summary of the post */
  excerpt: Scalars['String'];
  /** Convert image of the post */
  cover_image: Image;
  /** Type of the post. Can be "page" or "post" */
  type: PostTypes;
  /** Status of the post */
  status: PostStatusOptions;
  /** Featured post */
  featured: Scalars['Boolean'];
  /** The uri of the post */
  slug: Scalars['String'];
  /** The creation date of the post */
  createdAt: Scalars['Date'];
  /** The published date of the post */
  publishedAt: Scalars['Date'];
  /** The date scheduled to publish the post */
  scheduledAt?: Maybe<Scalars['Date']>;
  /** Last updated date of the post */
  updatedAt: Scalars['Date'];
  /** Reading time of the post in minutes */
  reading_time: Scalars['String'];
  /** Tags of the post */
  tags: Array<Taxonomy>;
};

export type Image = {
  __typename?: 'Image';
  src: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export enum PostTypes {
  Page = 'page',
  Post = 'post'
}

export enum PostStatusOptions {
  Publish = 'publish',
  Draft = 'draft',
  Trash = 'trash'
}

export type Taxonomy = {
  __typename?: 'Taxonomy';
  id: Scalars['Int'];
  name: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  type?: Maybe<TaxonomyType>;
  posts?: Maybe<PostsNode>;
};

export enum TaxonomyType {
  PostTag = 'post_tag'
}

export type PostsNode = {
  __typename?: 'PostsNode';
  count: Scalars['Int'];
  rows: Array<Post>;
};

export type PostsFilters = {
  tag?: Maybe<Scalars['String']>;
  tagSlug?: Maybe<Scalars['String']>;
  sortBy?: Maybe<PostSortBy>;
  status?: Maybe<PostStatusOptions>;
  author?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  type?: Maybe<PostTypes>;
  cursor?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  featured?: Maybe<Scalars['Boolean']>;
};

export enum PostSortBy {
  Newest = 'newest',
  Oldest = 'oldest'
}

export type AdjacentPosts = {
  __typename?: 'AdjacentPosts';
  previous?: Maybe<Post>;
  next?: Maybe<Post>;
};

export type SearchFilters = {
  query?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  cursor?: Maybe<Scalars['Int']>;
  featured?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['String']>;
};

export type SearchOutput = {
  __typename?: 'SearchOutput';
  ok?: Maybe<Scalars['Boolean']>;
  count?: Maybe<Scalars['Int']>;
  rows?: Maybe<Array<Maybe<SearchResult>>>;
};

export type SearchResult = {
  __typename?: 'SearchResult';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
};

export type Stats = {
  __typename?: 'Stats';
  posts?: Maybe<PostStatus>;
  pages?: Maybe<PostStatus>;
  tags?: Maybe<Scalars['Int']>;
  media?: Maybe<Scalars['Int']>;
};

export type PostStatus = {
  __typename?: 'PostStatus';
  published?: Maybe<Scalars['Int']>;
  drafts?: Maybe<Scalars['Int']>;
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  ok: Scalars['Boolean'];
  data?: Maybe<SearchData>;
  errors?: Maybe<Array<Error>>;
};

export type SearchData = {
  __typename?: 'SearchData';
  pages?: Maybe<Array<Maybe<SearchResults>>>;
  posts?: Maybe<Array<Maybe<SearchResults>>>;
  tags?: Maybe<Array<Maybe<SearchResults>>>;
};

export type SearchResults = {
  __typename?: 'SearchResults';
  title?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type Setting = {
  __typename?: 'Setting';
  site_title: Scalars['String'];
  site_tagline: Scalars['String'];
  site_email: Scalars['String'];
  site_url: Scalars['String'];
  site_footer: Scalars['String'];
  site_description: Scalars['String'];
  subscribe_embed: Scalars['String'];
  social_twitter: Scalars['String'];
  social_facebook: Scalars['String'];
  social_instagram: Scalars['String'];
  social_github: Scalars['String'];
  displayAuthorInfo: Scalars['String'];
  cloudinary_key: Scalars['String'];
  cloudinary_name: Scalars['String'];
  cloudinary_secret: Scalars['String'];
  menu: Array<Navigation>;
  css: Scalars['String'];
  google_analytics: Scalars['String'];
  locale: Scalars['String'];
  theme: Scalars['String'];
  disqus_id?: Maybe<Scalars['String']>;
  banner: Image;
  site_logo: Image;
  site_favicon: Image;
};

export type Navigation = {
  __typename?: 'Navigation';
  type: NavigationType;
  slug: Scalars['String'];
  original_name: Scalars['String'];
  label: Scalars['String'];
};

export enum NavigationType {
  Tag = 'tag',
  Page = 'page',
  Custom = 'custom'
}

export type TaxonomyFilters = {
  type?: Maybe<TaxonomyType>;
  active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type Theme = {
  __typename?: 'Theme';
  name: Scalars['String'];
  settings: Array<ThemeSettings>;
};

export type ThemeSettings = {
  __typename?: 'ThemeSettings';
  name: Scalars['String'];
  type: ThemeSettingsUiInputTypes;
  tag: ThemeSettingsUiTags;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  placeholder?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Scalars['String']>;
  changedValue?: Maybe<Scalars['String']>;
  selectedValue?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  helpText?: Maybe<Scalars['String']>;
};

export enum ThemeSettingsUiInputTypes {
  Radio = 'radio',
  Text = 'text',
  Checkbox = 'checkbox'
}

export enum ThemeSettingsUiTags {
  Input = 'input',
  Select = 'select'
}

export type Mutation = {
  __typename?: 'Mutation';
  register: AuthorResponse;
  login: LoginResponse;
  forgotPassword: ForgotPasswordResponse;
  resetPassword: ForgotPasswordResponse;
  updateAuthor?: Maybe<AuthorResponse>;
  createAuthor: CreateAuthorResponse;
  sendMail?: Maybe<Scalars['Boolean']>;
  insertMedia?: Maybe<Media>;
  deleteMedia?: Maybe<DeleteResponse>;
  updateMedia?: Maybe<UpdateResponse>;
  createPost: Response;
  updatePost: Response;
  deletePosts: Response;
  updateOptions: Setting;
  updateTaxonomy: EditTaxResponse;
  deleteTaxonomy: EditTaxResponse;
  updateThemes: Scalars['Boolean'];
  insertThemes: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  remember?: Maybe<Scalars['Boolean']>;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUpdateAuthorArgs = {
  author: InputAuthor;
};


export type MutationCreateAuthorArgs = {
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  roleName?: Maybe<EnumRoles>;
};


export type MutationSendMailArgs = {
  to: Scalars['String'];
  subject?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type MutationInsertMediaArgs = {
  url?: Maybe<Scalars['String']>;
};


export type MutationDeleteMediaArgs = {
  ids: Array<Scalars['Int']>;
};


export type MutationUpdateMediaArgs = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};


export type MutationCreatePostArgs = {
  data?: Maybe<InputCreatePost>;
};


export type MutationUpdatePostArgs = {
  data?: Maybe<InputUpdatePost>;
};


export type MutationDeletePostsArgs = {
  ids?: Maybe<Array<Scalars['Int']>>;
  deleteFromSystem?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateOptionsArgs = {
  options: Array<OptionInputType>;
};


export type MutationUpdateTaxonomyArgs = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  type: TaxonomyType;
  slug?: Maybe<Scalars['String']>;
};


export type MutationDeleteTaxonomyArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateThemesArgs = {
  name: Scalars['String'];
  settings: Array<InputThemeSettings>;
};


export type MutationInsertThemesArgs = {
  name: Scalars['String'];
  settings: Array<InputThemeSettings>;
};

export type AuthorResponse = {
  __typename?: 'AuthorResponse';
  ok: Scalars['Boolean'];
  errors?: Maybe<Array<Error>>;
  data?: Maybe<Author>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
  data?: Maybe<Author>;
  errors?: Maybe<Array<Error>>;
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  ok: Scalars['Boolean'];
  msg?: Maybe<Scalars['String']>;
};

export type InputAuthor = {
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  social?: Maybe<Social>;
  password?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['String']>;
};

export type Social = {
  github?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  ok: Scalars['Boolean'];
};

export type UpdateResponse = {
  __typename?: 'UpdateResponse';
  ok: Scalars['Boolean'];
  errors?: Maybe<Array<Maybe<Error>>>;
};

export type InputCreatePost = {
  title?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  md?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['Int']>;
  excerpt?: Maybe<Scalars['String']>;
  cover_image?: Maybe<InputImage>;
  type?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  status?: Maybe<PostStatusOptions>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<TaxonomyInputType>>>;
};

export type InputImage = {
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type TaxonomyInputType = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type Response = {
  __typename?: 'Response';
  ok: Scalars['Boolean'];
  post?: Maybe<Post>;
  errors?: Maybe<Array<Error>>;
};

export type InputUpdatePost = {
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  md?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['Int']>;
  featured?: Maybe<Scalars['Boolean']>;
  excerpt?: Maybe<Scalars['String']>;
  cover_image?: Maybe<InputImage>;
  publishedAt?: Maybe<Scalars['Date']>;
  scheduledAt?: Maybe<Scalars['Date']>;
  type?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusOptions>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<TaxonomyInputType>>>;
};

export type OptionInputType = {
  site_title?: Maybe<Scalars['String']>;
  site_tagline?: Maybe<Scalars['String']>;
  site_email?: Maybe<Scalars['String']>;
  site_url?: Maybe<Scalars['String']>;
  site_footer?: Maybe<Scalars['String']>;
  site_description?: Maybe<Scalars['String']>;
  subscribe_embed?: Maybe<Scalars['String']>;
  social_twitter?: Maybe<Scalars['String']>;
  social_facebook?: Maybe<Scalars['String']>;
  social_instagram?: Maybe<Scalars['String']>;
  social_github?: Maybe<Scalars['String']>;
  displayAuthorInfo?: Maybe<Scalars['String']>;
  cloudinary_key?: Maybe<Scalars['String']>;
  cloudinary_name?: Maybe<Scalars['String']>;
  cloudinary_secret?: Maybe<Scalars['String']>;
  menu?: Maybe<Array<InputNavigation>>;
  css?: Maybe<Scalars['String']>;
  google_analytics?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  disqus_id?: Maybe<Scalars['String']>;
  banner?: Maybe<InputImage>;
  site_logo?: Maybe<InputImage>;
  site_favicon?: Maybe<InputImage>;
};

export type InputNavigation = {
  type?: Maybe<NavigationType>;
  slug?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type EditTaxResponse = {
  __typename?: 'EditTaxResponse';
  ok: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  errors?: Maybe<Array<Error>>;
};

export type InputThemeSettings = {
  name: Scalars['String'];
  type: ThemeSettingsUiInputTypes;
  tag: ThemeSettingsUiTags;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  placeholder?: Maybe<Scalars['String']>;
  defaultValue?: Maybe<Scalars['String']>;
  changedValue?: Maybe<Scalars['String']>;
  selectedValue?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  helpText?: Maybe<Scalars['String']>;
};

export type PostTaxonomyNode = {
  __typename?: 'PostTaxonomyNode';
  count?: Maybe<Scalars['Int']>;
  rows?: Maybe<Array<Maybe<Post>>>;
};

export enum EnumPermissions {
  ReadOnlyPosts = 'READ_ONLY_POSTS',
  ManageAllPosts = 'MANAGE_ALL_POSTS',
  ManageUsers = 'MANAGE_USERS',
  ManageSettings = 'MANAGE_SETTINGS',
  ManageOwnPosts = 'MANAGE_OWN_POSTS'
}

export enum TaxonomyTypes {
  Tags = 'tags'
}

export type HeaderSettingsFragment = (
  { __typename?: 'Setting' }
  & Pick<Setting, 'site_title' | 'site_description' | 'social_facebook' | 'social_twitter' | 'social_github'>
  & { banner: (
    { __typename?: 'Image' }
    & Pick<Image, 'src'>
  ), site_logo: (
    { __typename?: 'Image' }
    & Pick<Image, 'src'>
  ), menu: Array<(
    { __typename?: 'Navigation' }
    & Pick<Navigation, 'type' | 'slug' | 'label'>
  )> }
);

export type LayoutFragment = (
  { __typename?: 'Query' }
  & { settings: (
    { __typename?: 'Setting' }
    & Pick<Setting, 'site_footer' | 'subscribe_embed' | 'social_github' | 'social_facebook' | 'social_twitter'>
    & HeaderSettingsFragment
  ) }
);

export type MenuFragment = (
  { __typename?: 'Query' }
  & { settings: (
    { __typename?: 'Setting' }
    & { menu: Array<(
      { __typename?: 'Navigation' }
      & Pick<Navigation, 'type' | 'slug' | 'original_name' | 'label'>
    )> }
  ) }
);

export type PostDetailsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'slug' | 'title' | 'reading_time' | 'html' | 'publishedAt'>
  & { cover_image: (
    { __typename?: 'Image' }
    & Pick<Image, 'src'>
  ) }
);

export type AllPostsFragment = (
  { __typename?: 'Query' }
  & { posts: (
    { __typename?: 'PostsNode' }
    & { rows: Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'slug' | 'reading_time' | 'excerpt'>
      & { cover_image: (
        { __typename?: 'Image' }
        & Pick<Image, 'src'>
      ), author: (
        { __typename?: 'Author' }
        & Pick<Author, 'avatar'>
      ) }
    )> }
  ) }
);

export type LayoutQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type LayoutQueryQuery = (
  { __typename?: 'Query' }
  & LayoutFragment
);

export type HomeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQueryQuery = (
  { __typename?: 'Query' }
  & AllPostsFragment
  & MenuFragment
);

export type PostQueryQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type PostQueryQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & PostDetailsFragment
  )> }
);

export type PostPathQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PostPathQueryQuery = (
  { __typename?: 'Query' }
  & { posts: (
    { __typename?: 'PostsNode' }
    & { rows: Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'slug'>
    )> }
  ) }
);
