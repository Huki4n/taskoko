import { create } from 'zustand/react'

interface taskStore {
  editTaskId: string
  editColumnId: string
  taskSize: BlockSize | null
  setTaskSize: (size: BlockSize) => void
  setEditTaskId: (taskId: string, columnId: string) => void
}

export const useEditTaskStore = create<taskStore>(set => ({
  editTaskId: '',
  editColumnId: '',
  taskSize: null,
  setTaskSize: size => set({ taskSize: size }),
  setEditTaskId: (taskId, columnId) =>
    set(state => ({
      editTaskId: state.editTaskId === taskId ? '' : taskId,
      editColumnId:
        state.editColumnId === columnId &&
        state.editTaskId === taskId
          ? ''
          : columnId,
    })),
}))

interface BlockSize {
  width: number
  height: number
}

