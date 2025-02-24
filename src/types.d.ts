interface NavigationItem {
  name: string;
  url: string;
}

interface SocialLinks {
  instagram: string;
}

interface ProjectItem {
  title: string;
  link: string;
  tag: string;
}

interface ImageProject extends ProjectItem {
  image: string;
}

interface VideoProject extends ProjectItem {
  video: string;
}

interface Partner {
  name: string;
  image: string;
  url: string;
}

interface Author {
  name: string;
  occupation: string;
  avatar: string;
  instagram: string;
}

interface Projects {
  images: ImageProject[];
  videos: VideoProject[];
}

interface SiteData {
  siteName: string;
  siteTag: string;
  siteLogo: string;
  description: string;
  contactMessage: string;
  whatsapp: string;
  defaultImage: string;
  googleVerification: string;
  navigation: NavigationItem[];
  socials: SocialLinks;
  url: string;
  projects: Projects;
  partners: Partner[];
  author: Author;
}

export type {
  Author,
  ImageProject,
  NavigationItem,
  Partner,
  ProjectItem,
  Projects,
  SiteData,
  SocialLinks,
  VideoProject,
};
