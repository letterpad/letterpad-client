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
  id: Scalars['Int'];
  email: Scalars['String'];
  username: Scalars['String'];
  name: Scalars['String'];
  social?: Maybe<Social>;
  bio: Scalars['String'];
  role: Role;
  permissions: Array<Permissions>;
  avatar: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
  accessToken?: Maybe<Scalars['String']>;
};

export type AuthorNotFoundError = LetterpadError & {
  __typename?: 'AuthorNotFoundError';
  message: Scalars['String'];
};

export type AuthorResponse = {
  __typename?: 'AuthorResponse';
  ok: Scalars['Boolean'];
  errors?: Maybe<Array<Maybe<Error>>>;
  data?: Maybe<Author>;
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
  path: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  ok: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type Image = {
  __typename?: 'Image';
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type InputAuthor = {
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  social?: Maybe<InputSocial>;
  password?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['String']>;
};

export type InputCreateAuthor = {
  email: Scalars['String'];
  site_title: Scalars['String'];
  name: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};

export type InputCreatePost = {
  title?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  /** authorId: Int */
  excerpt?: Maybe<Scalars['String']>;
  cover_image?: Maybe<InputImage>;
  type?: Maybe<PostTypes>;
  featured?: Maybe<Scalars['Boolean']>;
  status?: Maybe<PostStatusOptions>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<TagsInputType>>>;
};

export type InputImage = {
  src: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type InputNavigation = {
  type?: Maybe<NavigationType>;
  slug?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type InputSocial = {
  twitter?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
};

export type InputTags = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type InputUpdateMedia = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type InputUpdatePost = {
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  html_draft?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  excerpt?: Maybe<Scalars['String']>;
  cover_image?: Maybe<InputImage>;
  publishedAt?: Maybe<Scalars['Date']>;
  scheduledAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  type?: Maybe<PostTypes>;
  status?: Maybe<PostStatusOptions>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<TagsInputType>>;
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
  id: Scalars['Int'];
  authorId?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
  createdAt: Scalars['Date'];
  name: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
  description: Scalars['String'];
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

export type MediaUpdateResponse = MediaUpdateResult | MediaError;

export type MediaUpdateResult = {
  __typename?: 'MediaUpdateResult';
  ok: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<LoginResponse>;
  updateAuthor?: Maybe<AuthorResponse>;
  createAuthor?: Maybe<CreateAuthorResponse>;
  forgotPassword: ForgotPasswordResponse;
  resetPassword: ForgotPasswordResponse;
  /** insertMedia(url: String): Media */
  deleteMedia?: Maybe<MediaDeleteResponse>;
  updateMedia?: Maybe<MediaUpdateResponse>;
  createPost: CreatePostResponse;
  updatePost: UpdatePostResponse;
  updateOptions?: Maybe<Setting>;
  updateTags: UpdateTagsResponse;
  deleteTags: DeleteTagsResponse;
};


export type MutationLoginArgs = {
  data?: Maybe<LoginData>;
};


export type MutationUpdateAuthorArgs = {
  author: InputAuthor;
};


export type MutationCreateAuthorArgs = {
  data: InputCreateAuthor;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationDeleteMediaArgs = {
  ids: Array<Scalars['Int']>;
};


export type MutationUpdateMediaArgs = {
  data: InputUpdateMedia;
};


export type MutationCreatePostArgs = {
  data?: Maybe<InputCreatePost>;
};


export type MutationUpdatePostArgs = {
  data?: Maybe<InputUpdatePost>;
};


export type MutationUpdateOptionsArgs = {
  options: Array<OptionInputType>;
};


export type MutationUpdateTagsArgs = {
  data?: Maybe<InputTags>;
};


export type MutationDeleteTagsArgs = {
  id: Scalars['Int'];
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
  displayAuthorInfo?: Maybe<Scalars['Boolean']>;
  cloudinary_key?: Maybe<Scalars['String']>;
  cloudinary_name?: Maybe<Scalars['String']>;
  cloudinary_secret?: Maybe<Scalars['String']>;
  menu?: Maybe<Array<InputNavigation>>;
  css?: Maybe<Scalars['String']>;
  google_analytics?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  disqus_id?: Maybe<Scalars['String']>;
  banner?: Maybe<InputImage>;
  site_logo?: Maybe<InputImage>;
  site_favicon?: Maybe<InputImage>;
};

export enum Permissions {
  ManageOwnPosts = 'MANAGE_OWN_POSTS',
  ReadOnlyPosts = 'READ_ONLY_POSTS',
  ManageAllPosts = 'MANAGE_ALL_POSTS',
  ManageUsers = 'MANAGE_USERS',
  ManageSettings = 'MANAGE_SETTINGS'
}

export type Post = {
  __typename?: 'Post';
  /** Primary key */
  id: Scalars['Int'];
  /** Title of the post */
  title: Scalars['String'];
  /** Html content of the post */
  html: Scalars['String'];
  /** Draft for republishing content */
  html_draft: Scalars['String'];
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
  /** The date scheduled to published the post */
  scheduledAt: Scalars['Date'];
  /** Last updated date of the post */
  updatedAt: Scalars['Date'];
  /** Reading time of the post in minutes */
  reading_time: Scalars['String'];
  /** Tags of the post */
  tags: Array<Tags>;
};

export type PostCountsByStatus = {
  __typename?: 'PostCountsByStatus';
  published: Scalars['Int'];
  drafts: Scalars['Int'];
};

export type PostError = LetterpadError & {
  __typename?: 'PostError';
  message: Scalars['String'];
};

export type PostFilters = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  previewHash?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusOptions>;
  type?: Maybe<PostTypes>;
};

export type PostResponse = Post | PostError;

export enum PostStatusOptions {
  Published = 'published',
  Draft = 'draft',
  Trashed = 'trashed'
}

export enum PostTypes {
  Post = 'post',
  Page = 'page'
}

export type PostsFilters = {
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<PostTypes>;
  slug?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  previewHash?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusOptions>;
  /** name of author. entering  this field will ignore tagSlug and tag */
  author?: Maybe<Scalars['String']>;
  /** url of a tag. entering this field will ignore tag */
  tagSlug?: Maybe<Scalars['String']>;
  /** name of a tag. */
  tag?: Maybe<Scalars['String']>;
  cursor?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortBy>;
};

export type PostsNode = {
  __typename?: 'PostsNode';
  count: Scalars['Int'];
  rows: Array<Post>;
};

export type PostsResponse = PostsNode | PostError;

export type Query = {
  __typename?: 'Query';
  me?: Maybe<MeResponse>;
  media: MediaNode;
  post: PostResponse;
  posts: PostsResponse;
  stats?: Maybe<StatsResponse>;
  settings: SettingResponse;
  tags: TagsResponse;
  tag: TagResponse;
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


export type QueryTagsArgs = {
  filters?: Maybe<TagsFilters>;
};


export type QueryTagArgs = {
  slug: Scalars['String'];
};

export type Response = {
  __typename?: 'Response';
  ok: Scalars['Boolean'];
  post?: Maybe<Post>;
  errors?: Maybe<Array<Error>>;
};

export enum Role {
  Admin = 'ADMIN',
  Reviewer = 'REVIEWER',
  Reader = 'READER',
  Author = 'AUTHOR'
}

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
  displayAuthorInfo: Scalars['Boolean'];
  cloudinary_key: Scalars['String'];
  cloudinary_name: Scalars['String'];
  cloudinary_secret: Scalars['String'];
  menu: Array<Navigation>;
  css: Scalars['String'];
  google_analytics: Scalars['String'];
  theme: Scalars['String'];
  disqus_id?: Maybe<Scalars['String']>;
  banner: Image;
  site_logo: Image;
  site_favicon: Image;
  client_token: Scalars['String'];
};

export type SettingError = LetterpadError & {
  __typename?: 'SettingError';
  message: Scalars['String'];
};

export type SettingResponse = Setting | SettingError;

export type Social = {
  __typename?: 'Social';
  twitter?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
};

export enum SortBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Stats = {
  __typename?: 'Stats';
  posts: PostCountsByStatus;
  pages: PostCountsByStatus;
  tags: Scalars['Int'];
  media: Scalars['Int'];
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
  id: Scalars['Int'];
  name: Scalars['String'];
  desc?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  posts?: Maybe<PostsResponse>;
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
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  desc: Scalars['String'];
};

export type TagsNode = {
  __typename?: 'TagsNode';
  rows: Array<Tags>;
};

export type TagsResponse = TagsNode | TagsError;

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
  & { posts: (
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
  ) | { __typename?: 'PostError' } }
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
  & { posts: (
    { __typename?: 'PostsNode' }
    & PostsFragmentFragment
  ) | { __typename?: 'PostError' }, tag: (
    { __typename?: 'TagResultError' }
    & TagFragment_TagResultError_Fragment
  ) | (
    { __typename?: 'Tags' }
    & TagFragment_Tags_Fragment
  ) }
  & LayoutFragment
);
