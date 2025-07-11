import type { JSX } from "react";
import type { FileDataProps, FileItem } from "../types";

export function FileData({ data, path, onToggle, onAdd, onDoubleClick }: FileDataProps): JSX.Element {
  const isFolder: boolean = !!data.files;
  
  return (
    <li>
      <button 
        onClick={() => isFolder && onToggle(path)} 
        onDoubleClick={() => !isFolder && onDoubleClick(path)}
      >
        <span>{isFolder ? (data.isOpen ? '[-]' : '[+]') : ''}</span>
        {data.name}
      </button>
      {isFolder && data.isOpen && (
        <ul>
          {data.files!.map((child: FileItem, index: number) => (
            <FileData 
              key={index} 
              data={child} 
              path={[...path, child.name]} 
              onToggle={onToggle} 
              onAdd={onAdd} 
              onDoubleClick={onDoubleClick} 
            />
          ))}
          <li>
            <button onClick={() => onAdd(path)}>+</button>
          </li>
        </ul>
      )}
    </li>
  );
}
