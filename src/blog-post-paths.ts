import type { TagGroup } from './tags/tag-groups'
import { urlSegmentForContentPath } from './url-segment-for-content-path'
import { kebabCase } from './helpers/pathHelpers'

export function blogListForTagGroupsBasePath(...tagGroups: TagGroup[]) {
  return `/blog/${tagGroups.map(group => kebabCase(group.name.toLowerCase())).join('/')}`
}

export function blogPostUrlPath(postNode: { frontmatter: { slug?: string }, internal: { contentFilePath: string } }) {
  return '/blog/' + (postNode.frontmatter.slug || urlSegmentForContentPath(postNode.internal.contentFilePath))
}
