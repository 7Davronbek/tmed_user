import { StructureType } from "@/entities";
import { Icon } from "@/shared/icons";
import Image from "next/image";

type StructureProps = StructureType & {
  handleDelete?: () => void;
};

export function StrucutreCard({
  id,
  file,
  image,
  handleDelete,
}: StructureProps) {
  return (
    <div key={id}>
    {handleDelete && (
      <button style={{display: 'block', marginLeft: 'auto'}} className="button" onClick={() => handleDelete()}>
        <Icon.DeleteIcon />
      </button>
    )}
      <Image
        src={String(image)}
        alt="T MED Client Struktura"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}