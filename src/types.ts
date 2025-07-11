export type FileItem = {
  name: string;
  isOpen?: boolean;
  files?: FileItem[];
}

export type Path = string[];

export type FileListProps = {
  data: FileItem;
  path: Path;
  onToggle: (path: Path) => void;
  onAdd: (path: Path) => void;
  onDoubleClick: (path: Path) => void;
}

export type FileDataProps = {
  data: FileItem;
  path: Path;
  onToggle: (path: Path) => void;
  onAdd: (path: Path) => void;
  onDoubleClick: (path: Path) => void;
}
