export type ILiveLink = {
  client: string;
  server: string;
};
export type IGitLink = {
  client: string;
  server: string;
};

export type IProject = {
  name: string;
  title: string;
  desc: string;
  technologyUsed: string[];
  liveLink: ILiveLink;
  gitLinks: IGitLink;
};
