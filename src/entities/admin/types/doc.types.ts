export type DocType = {
  id?: string;
  name: string;
  nameRu: string;
  nameEn: string;
  link: string;
  lawType: LawType;
  file?: { url: string | null; file?: File };
  image?: string
};

export type DocResType = {
  id?: string;
  name: string;
  link: string;
  lawType: LawType;
  image: string;
};

export enum LawType {
  LAW = "LAW",
  PRESIDENTIAL = "PRESIDENTIAL",
  CABINET = "CABINET",
  RAILWAY = "RAILWAY",
  SSV = "SSV",
}
