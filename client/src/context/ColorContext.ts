import React, { createContext, useContext, ReactNode } from 'react';

export const TYPE_COLORS = {
  "BP": "bg-blue-200",
  "Two Pointers": "bg-green-200",
  "Sliding Window": "bg-blue-300",
  "Linked List": "bg-purple-200",
  "Stack": "bg-purple-300",
  "Queue": "bg-purple-400",
  "Hash Table": "bg-orange-200",
  "Prefix Sum": "bg-orange-300",
  "BFS": "bg-red-200",
  "DFS": "bg-red-300",
  "Tree": "bg-indigo-200",
  "Graph": "bg-teal-200",
  "Heap": "bg-yellow-200",
  "Top K": "bg-yellow-300",
  "Union Find": "bg-pink-200",
  "String":"bg-emerald-200",
};

// 定义类型
type TypeColorsContextType = typeof TYPE_COLORS;

export const TypeColorsContext = createContext<TypeColorsContextType | undefined>(undefined);

