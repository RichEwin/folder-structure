import { useState, type JSX } from 'react'
import { initialData } from '../initial-data';
import type { FileItem, Path } from '../types';
import { FileList } from "./file-list"

export function File(): JSX.Element {
  const [data, setData] = useState<FileItem[]>(initialData)
  const [input, setInput] = useState<string>("")

  const handleToggle = (path: Path): void => {
    const toggle = (node: FileItem, currentPath: Path): void => {
      if (JSON.stringify(currentPath) === JSON.stringify(path)) {
        node.isOpen = !node.isOpen;
        return;
      }
      if (node.files) {
        node.files.forEach(child => toggle(child, [...currentPath, child.name]));
      }
    };
    const newData: FileItem[] = JSON.parse(JSON.stringify(data));
    newData.forEach(node => toggle(node, [node.name]));
    setData(newData);
  };

  const handleAdd = (path: Path): void => {
    if (!input.trim()) {
      alert('Please enter a file name in the input box');
      return;
    }
    
    const addFile = (node: FileItem, currentPath: Path): void => {
      if (JSON.stringify(currentPath) === JSON.stringify(path)) {
        if (!node.files) node.files = [];
        node.files.push({ name: input });
        return;
      }
      if (node.files) {
        node.files.forEach(child => addFile(child, [...currentPath, child.name]));
      }
    };
    
    const newData: FileItem[] = JSON.parse(JSON.stringify(data));
    newData.forEach(node => addFile(node, [node.name]));
    setData(newData);
    setInput('');
  };

  const handleDoubleClick = (path: Path): void => {
    const makeFolder = (node: FileItem, currentPath: Path): void => {
      if (JSON.stringify(currentPath) === JSON.stringify(path)) {
        if (!node.files) {
          node.files = [];
        }
        return;
      }
      if (node.files) {
        node.files.forEach(child => makeFolder(child, [...currentPath, child.name]));
      }
    };
    
    const newData: FileItem[] = JSON.parse(JSON.stringify(data));
    newData.forEach(node => makeFolder(node, [node.name]));
    setData(newData);
  };

  return (
    <>
      <input 
        type="text" 
        placeholder="Enter an item" 
        value={input} 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
        data-testid="input-box"
      />
      <ul data-testid="files">
        {data.map((item: FileItem, index: number) => (
          <FileList 
            key={index}
            data={item} 
            path={[item.name]} 
            onToggle={handleToggle} 
            onAdd={handleAdd} 
            onDoubleClick={handleDoubleClick} 
          />
        ))}
      </ul>
    
    </>
  )
}