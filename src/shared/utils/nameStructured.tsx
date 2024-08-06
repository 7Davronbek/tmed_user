export const nameTructed = (name: string, tructedLength: number) => {
    if (name?.length > tructedLength) {
      if (tructedLength === 15) {
        return `${name.substr(0, 12)}...`;
      } else {
        return `${name.substr(0, tructedLength)}...`;
      }
    } else {
      return name;
    }
  };