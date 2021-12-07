export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Author = {
  __typename?: 'Author';
  accessToken?: Maybe<Scalars['String']>;
  avatar: Scalars['String'];
  bio: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  permissions: Array<Permissions>;
  role: Role;
  social?: Maybe<Social>;
  username: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
};

export type AuthorNotFoundError = LetterpadError & {
  __typename?: 'AuthorNotFoundError';
  message: Scalars['String'];
};

export type AuthorResponse = {
  __typename?: 'AuthorResponse';
  data?: Maybe<Author>;
  errors?: Maybe<Array<Maybe<Error>>>;
  ok: Scalars['Boolean'];
};

export type CreateAuthorError = LetterpadError & {
  __typename?: 'CreateAuthorError';
  message: Scalars['String'];
};

export type CreateAuthorResponse = Author | CreateAuthorError;

export type CreatePostResponse = Post | PostError;


export type DeleteTagsResponse = DeleteTagsResult | TagsError;

export type DeleteTagsResult = {
  __typename?: 'DeleteTagsResult';
  ok: Scalars['Boolean'];
};

export type EditTaxResponse = {
  __typename?: 'EditTaxResponse';
  ok: Scalars['Boolean'];
};

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']>;
  path: Scalars['String'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  message?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Image = {
  __typename?: 'Image';
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type InputAuthor = {
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['Int']>;
  social?: Maybe<InputSocial>;
};

export type InputCreateAuthor = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  site_title: Scalars['String'];
  token: Scalars['String'];
  username: Scalars['String'];
};

export type InputCreatePost = {
  cover_image?: Maybe<InputImage>;
  /** authorId: Int */
  excerpt?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  html?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusOptions>;
  tags?: Maybe<Array<Maybe<TagsInputType>>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<PostTypes>;
};

export type InputImage = {
  height?: Maybe<Scalars['Int']>;
  src: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type InputNavigation = {
  label?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<NavigationType>;
};

export type InputSocial = {
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type InputTags = {
  desc?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type InputUpdateMedia = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type InputUpdatePost = {
  cover_image?: Maybe<InputImage>;
  excerpt?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  html?: Maybe<Scalars['String']>;
  html_draft?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  publishedAt?: Maybe<Scalars['Date']>;
  scheduledAt?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusOptions>;
  tags?: Maybe<Array<TagsInputType>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<PostTypes>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type LetterpadError = {
  message: Scalars['String'];
};

export type LoginData = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginError = LetterpadError & {
  __typename?: 'LoginError';
  message: Scalars['String'];
};

export type LoginResponse = Author | LoginError;

export type MeResponse = Author | AuthorNotFoundError;

export type Media = {
  __typename?: 'Media';
  authorId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Date'];
  description: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type MediaDeleteResponse = MediaDeleteResult | MediaError;

export type MediaDeleteResult = {
  __typename?: 'MediaDeleteResult';
  ok: Scalars['Boolean'];
};

export type MediaError = LetterpadError & {
  __typename?: 'MediaError';
  message: Scalars['String'];
};

export type MediaFilters = {
  authorId?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type MediaNode = {
  __typename?: 'MediaNode';
  count: Scalars['Int'];
  rows: Array<Media>;
};

export type MediaUpdateResponse = MediaError | MediaUpdateResult;

export type MediaUpdateResult = {
  __typename?: 'MediaUpdateResult';
  ok: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor?: Maybe<CreateAuthorResponse>;
  createPost: CreatePostResponse;
  /** insertMedia(url: String): Media */
  deleteMedia?: Maybe<MediaDeleteResponse>;
  deleteTags: DeleteTagsResponse;
  forgotPassword: ForgotPasswordResponse;
  login?: Maybe<LoginResponse>;
  resetPassword: ForgotPasswordResponse;
  updateAuthor?: Maybe<AuthorResponse>;
  updateMedia?: Maybe<MediaUpdateResponse>;
  updateOptions?: Maybe<Setting>;
  updatePost: UpdatePostResponse;
  updateTags: UpdateTagsResponse;
};


export type MutationCreateAuthorArgs = {
  data: InputCreateAuthor;
};


export type MutationCreatePostArgs = {
  data?: Maybe<InputCreatePost>;
};


export type MutationDeleteMediaArgs = {
  ids: Array<Scalars['Int']>;
};


export type MutationDeleteTagsArgs = {
  id: Scalars['Int'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  data?: Maybe<LoginData>;
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationUpdateAuthorArgs = {
  author: InputAuthor;
};


export type MutationUpdateMediaArgs = {
  data: InputUpdateMedia;
};


export type MutationUpdateOptionsArgs = {
  options: Array<OptionInputType>;
};


export type MutationUpdatePostArgs = {
  data?: Maybe<InputUpdatePost>;
};


export type MutationUpdateTagsArgs = {
  data?: Maybe<InputTags>;
};

export type Navigation = {
  __typename?: 'Navigation';
  label: Scalars['String'];
  original_name: Scalars['String'];
  slug: Scalars['String'];
  type: NavigationType;
};

export enum NavigationType {
  Custom = 'custom',
  Page = 'page',
  Tag = 'tag'
}

export type OptionInputType = {
  banner?: Maybe<InputImage>;
  cloudinary_key?: Maybe<Scalars['String']>;
  cloudinary_name?: Maybe<Scalars['String']>;
  cloudinary_secret?: Maybe<Scalars['String']>;
  css?: Maybe<Scalars['String']>;
  displayAuthorInfo?: Maybe<Scalars['Boolean']>;
  disqus_id?: Maybe<Scalars['String']>;
  google_analytics?: Maybe<Scalars['String']>;
  menu?: Maybe<Array<InputNavigation>>;
  site_description?: Maybe<Scalars['String']>;
  site_email?: Maybe<Scalars['String']>;
  site_favicon?: Maybe<InputImage>;
  site_footer?: Maybe<Scalars['String']>;
  site_logo?: Maybe<InputImage>;
  site_tagline?: Maybe<Scalars['String']>;
  site_title?: Maybe<Scalars['String']>;
  site_url?: Maybe<Scalars['String']>;
  social_facebook?: Maybe<Scalars['String']>;
  social_github?: Maybe<Scalars['String']>;
  social_instagram?: Maybe<Scalars['String']>;
  social_twitter?: Maybe<Scalars['String']>;
  subscribe_embed?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
};

export enum Permissions {
  ManageAllPosts = 'MANAGE_ALL_POSTS',
  ManageOwnPosts = 'MANAGE_OWN_POSTS',
  ManageSettings = 'MANAGE_SETTINGS',
  ManageUsers = 'MANAGE_USERS',
  ReadOnlyPosts = 'READ_ONLY_POSTS'
}

export type Post = {
  __typename?: 'Post';
  /** Author information of the post */
  author: Author;
  /** Convert image of the post */
  cover_image: Image;
  /** The creation date of the post */
  createdAt: Scalars['Date'];
  /** A breif summary of the post */
  excerpt: Scalars['String'];
  /** Featured post */
  featured: Scalars['Boolean'];
  /** Html content of the post */
  html: Scalars['String'];
  /** Draft for republishing content */
  html_draft: Scalars['String'];
  /** Primary key */
  id: Scalars['Int'];
  /** The published date of the post */
  publishedAt: Scalars['Date'];
  /** Reading time of the post in minutes */
  reading_time: Scalars['String'];
  /** The date scheduled to published the post */
  scheduledAt: Scalars['Date'];
  /** The uri of the post */
  slug: Scalars['String'];
  /** Status of the post */
  status: PostStatusOptions;
  /** Tags of the post */
  tags: Array<Tags>;
  /** Title of the post */
  title: Scalars['String'];
  /** Type of the post. Can be "page" or "post" */
  type: PostTypes;
  /** Last updated date of the post */
  updatedAt: Scalars['Date'];
};

export type PostCountsByStatus = {
  __typename?: 'PostCountsByStatus';
  drafts: Scalars['Int'];
  published: Scalars['Int'];
};

export type PostError = LetterpadError & {
  __typename?: 'PostError';
  message: Scalars['String'];
};

export type PostFilters = {
  featured?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  previewHash?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusOptions>;
  type?: Maybe<PostTypes>;
};

export type PostResponse = Post | PostError;

export enum PostStatusOptions {
  Draft = 'draft',
  Published = 'published',
  Trashed = 'trashed'
}

export enum PostTypes {
  Page = 'page',
  Post = 'post'
}

export type PostsFilters = {
  /** name of author. entering  this field will ignore tagSlug and tag */
  author?: Maybe<Scalars['String']>;
  cursor?: Maybe<Scalars['Int']>;
  featured?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  previewHash?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sortBy?: Maybe<SortBy>;
  status?: Maybe<PostStatusOptions>;
  /** name of a tag. */
  tag?: Maybe<Scalars['String']>;
  /** url of a tag. entering this field will ignore tag */
  tagSlug?: Maybe<Scalars['String']>;
  type?: Maybe<PostTypes>;
};

export type PostsNode = {
  __typename?: 'PostsNode';
  count: Scalars['Int'];
  rows: Array<Post>;
};

export type PostsResponse = PostError | PostsNode;

export type Query = {
  __typename?: 'Query';
  me?: Maybe<MeResponse>;
  media: MediaNode;
  post: PostResponse;
  posts: PostsResponse;
  settings: SettingResponse;
  stats?: Maybe<StatsResponse>;
  tag: TagResponse;
  tags: TagsResponse;
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


export type QueryTagArgs = {
  slug: Scalars['String'];
};


export type QueryTagsArgs = {
  filters?: Maybe<TagsFilters>;
};

export type Response = {
  __typename?: 'Response';
  errors?: Maybe<Array<Error>>;
  ok: Scalars['Boolean'];
  post?: Maybe<Post>;
};

export enum Role {
  Admin = 'ADMIN',
  Author = 'AUTHOR',
  Reader = 'READER',
  Reviewer = 'REVIEWER'
}

export type Setting = {
  __typename?: 'Setting';
  banner: Image;
  client_token: Scalars['String'];
  cloudinary_key: Scalars['String'];
  cloudinary_name: Scalars['String'];
  cloudinary_secret: Scalars['String'];
  css: Scalars['String'];
  displayAuthorInfo: Scalars['Boolean'];
  disqus_id?: Maybe<Scalars['String']>;
  google_analytics: Scalars['String'];
  menu: Array<Navigation>;
  site_description: Scalars['String'];
  site_email: Scalars['String'];
  site_favicon: Image;
  site_footer: Scalars['String'];
  site_logo: Image;
  site_tagline: Scalars['String'];
  site_title: Scalars['String'];
  site_url: Scalars['String'];
  social_facebook: Scalars['String'];
  social_github: Scalars['String'];
  social_instagram: Scalars['String'];
  social_twitter: Scalars['String'];
  subscribe_embed: Scalars['String'];
  theme: Scalars['String'];
};

export type SettingError = LetterpadError & {
  __typename?: 'SettingError';
  message: Scalars['String'];
};

export type SettingResponse = Setting | SettingError;

export type Social = {
  __typename?: 'Social';
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export enum SortBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Stats = {
  __typename?: 'Stats';
  media: Scalars['Int'];
  pages: PostCountsByStatus;
  posts: PostCountsByStatus;
  tags: Scalars['Int'];
};

export type StatsError = LetterpadError & {
  __typename?: 'StatsError';
  message: Scalars['String'];
};

export type StatsResponse = Stats | StatsError;

export type TagResponse = TagResultError | Tags;

export type TagResultError = LetterpadError & {
  __typename?: 'TagResultError';
  message: Scalars['String'];
};

export type Tags = {
  __typename?: 'Tags';
  desc?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  posts?: Maybe<PostsResponse>;
  slug: Scalars['String'];
};

export type TagsError = LetterpadError & {
  __typename?: 'TagsError';
  message: Scalars['String'];
};

export type TagsFilters = {
  active?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type TagsInputType = {
  desc: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type TagsNode = {
  __typename?: 'TagsNode';
  rows: Array<Tags>;
};

export type TagsResponse = TagsError | TagsNode;

export type UpdatePostResponse = Post | PostError;

export type UpdateTagsResponse = EditTaxResponse | TagsError;

export type HeaderSettingsFragment = (
  { __typename?: 'Setting' }
  & Pick<Setting, 'site_title' | 'site_description' | 'social_facebook' | 'social_twitter' | 'social_github' | 'social_instagram' | 'site_tagline'>
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
    & Pick<Setting, 'site_footer' | 'subscribe_embed' | 'social_github' | 'social_facebook' | 'social_twitter' | 'social_instagram' | 'css'>
    & { site_favicon: (
      { __typename?: 'Image' }
      & Pick<Image, 'src'>
    ) }
    & HeaderSettingsFragment
  ) | { __typename?: 'SettingError' }, me?: Maybe<(
    { __typename?: 'Author' }
    & Pick<Author, 'name'>
  ) | { __typename?: 'AuthorNotFoundError' }> }
);

export type PostDetailsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'slug' | 'title' | 'reading_time' | 'html' | 'publishedAt' | 'updatedAt' | 'excerpt'>
  & { tags: Array<(
    { __typename?: 'Tags' }
    & Pick<Tags, 'name' | 'slug'>
  )>, author: (
    { __typename?: 'Author' }
    & Pick<Author, 'name' | 'avatar'>
  ), cover_image: (
    { __typename?: 'Image' }
    & Pick<Image, 'src'>
  ) }
);

export type AllPostsFragment = (
  { __typename?: 'Query' }
  & { posts: { __typename?: 'PostError' } | (
    { __typename?: 'PostsNode' }
    & Pick<PostsNode, 'count'>
    & { rows: Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title' | 'slug' | 'publishedAt' | 'reading_time' | 'excerpt'>
      & { cover_image: (
        { __typename?: 'Image' }
        & Pick<Image, 'src'>
      ), author: (
        { __typename?: 'Author' }
        & Pick<Author, 'avatar' | 'name'>
      ) }
    )> }
  ) }
);

export type MenuFragment = (
  { __typename?: 'Query' }
  & { settings: (
    { __typename: 'Setting' }
    & { menu: Array<(
      { __typename?: 'Navigation' }
      & Pick<Navigation, 'type' | 'slug' | 'original_name' | 'label'>
    )> }
  ) | { __typename: 'SettingError' } }
);

export type HomeQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQueryQuery = (
  { __typename?: 'Query' }
  & MenuFragment
  & LayoutFragment
);

export type PageQueryQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type PageQueryQuery = (
  { __typename?: 'Query' }
  & { post: (
    { __typename: 'Post' }
    & PostDetailsFragment
  ) | { __typename: 'PostError' } }
  & LayoutFragment
);

export type PostQueryQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type PostQueryQuery = (
  { __typename?: 'Query' }
  & { post: (
    { __typename: 'Post' }
    & PostDetailsFragment
  ) | { __typename: 'PostError' } }
  & LayoutFragment
);

export type PreviewQueryQueryVariables = Exact<{
  previewHash?: Maybe<Scalars['String']>;
}>;


export type PreviewQueryQuery = (
  { __typename?: 'Query' }
  & { post: (
    { __typename: 'Post' }
    & PostDetailsFragment
  ) | { __typename: 'PostError' } }
  & LayoutFragment
);

export type TagFragment_TagResultError_Fragment = (
  { __typename?: 'TagResultError' }
  & Pick<TagResultError, 'message'>
);

export type TagFragment_Tags_Fragment = (
  { __typename?: 'Tags' }
  & Pick<Tags, 'name' | 'desc' | 'slug'>
);

export type TagFragmentFragment = TagFragment_TagResultError_Fragment | TagFragment_Tags_Fragment;

export type PostsFragmentFragment = (
  { __typename?: 'PostsNode' }
  & Pick<PostsNode, 'count'>
  & { rows: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'slug' | 'publishedAt' | 'reading_time' | 'excerpt'>
    & { cover_image: (
      { __typename?: 'Image' }
      & Pick<Image, 'src'>
    ), author: (
      { __typename?: 'Author' }
      & Pick<Author, 'avatar' | 'name'>
    ) }
  )> }
);

export type CollectionQueryQueryVariables = Exact<{
  tagSlug: Scalars['String'];
}>;


export type CollectionQueryQuery = (
  { __typename?: 'Query' }
  & { posts: { __typename?: 'PostError' } | (
    { __typename?: 'PostsNode' }
    & PostsFragmentFragment
  ), tag: (
    { __typename?: 'TagResultError' }
    & TagFragment_TagResultError_Fragment
  ) | (
    { __typename?: 'Tags' }
    & TagFragment_Tags_Fragment
  ) }
  & LayoutFragment
);
