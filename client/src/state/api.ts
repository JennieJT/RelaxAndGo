import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface KnowledgeNode {
  _id: string;
  title: string;
  content: string;
}

interface Task {
  _id: string;
  content: string;
  status: boolean;
  type: string[];
  complete:number;
  times:number;
}

interface Algo {
  _id: string;
  id_leetcode: number;
  title: string;
  type: string[];
  difficulty: string;
  status: boolean;
  complete: number;
  times:number;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/" }),
  reducerPath: 'main',
  tagTypes: ['KnowledgeNodes', 'Tasks', 'Algos'],
  endpoints: (builder) => ({
    getKnowledgeNodes: builder.query<KnowledgeNode[], void>({
      query: () => 'api/knowledgeNodes',
      providesTags: ['KnowledgeNodes'],
    }),
    getTasks: builder.query<Task[], void>({
      query: () => 'api/tasks',
      providesTags: ['Tasks'],
    }),
    updateTaskCompletion: builder.mutation<void, { id: string; status: boolean }>({
      query: ({ id, status }) => ({
        url: `api/tasks/${id}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Tasks'],
    }),
    getAlgos: builder.query<Algo[], void>({
      query: () => 'api/algo',
      providesTags: ['Algos'],
    }),
    updateAlgoCompletion: builder.mutation<void, { id: string; status: boolean }>({
      query: ({ id, status }) => ({
        url: `api/algo/${id}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Algos'],
    }),
  }),
});

export const {
  useGetKnowledgeNodesQuery,
  useGetTasksQuery,
  useUpdateTaskCompletionMutation,
  useGetAlgosQuery,
  useUpdateAlgoCompletionMutation
} = api;
