import { create } from "zustand";

export type HeaderType = string;

interface HeaderData {
  title?: string;
}

interface HeaderStore {
  type: HeaderType | null;
  data: HeaderData;
  isOpen: boolean;
  onOpen: (type: HeaderType, data?: HeaderData) => void;
  onClose: () => void;
}

export const useHeader = create<HeaderStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
