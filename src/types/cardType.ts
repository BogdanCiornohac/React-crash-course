export interface cardProps {
  id: number;
  title: string;
  completed: boolean;
  onComplete: (id: number) => void;
}

export interface navtabProps {
  name: string;
  navTo: string;
}
