export type ILiveLink = {
  client: string;
  server: string;
};
export type IGitLink = {
  client: string;
  server: string;
};

export type IProjectImg = {
  projectHero: string;
  img1?: string;
  img2?: string;
};

export type IProject = {
  title: string;
  projectImg: IProjectImg;
  desc: string;
  technologyUsed: string[];
  liveLink: ILiveLink;
  gitLinks: IGitLink;
};
