import type { JSX } from "react";
import type { FileListProps } from "../types";
import { FileData } from "./file-data";

export function FileList({ data, path, onToggle, onAdd, onDoubleClick }: FileListProps): JSX.Element {
  return (
    <FileData 
      data={data} 
      path={path} 
      onToggle={onToggle} 
      onAdd={onAdd} 
      onDoubleClick={onDoubleClick} 
    />
  );
}
