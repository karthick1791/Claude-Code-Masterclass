import { DocumentData, FieldValue, QueryDocumentSnapshot } from 'firebase/firestore'

export type FinalStatus = 'success' | 'failure'

export interface Heist {
  id: string
  title: string
  direction: string
  createdBy: string
  createdByCodename: string
  assignedTo: string
  assignedToCodename: string
  deadline: Date
  finalStatus: FinalStatus | null
  createdAt: Date
}

export interface CreateHeistInput {
  title: string
  direction: string
  createdBy: string
  createdByCodename: string
  assignedTo: string
  assignedToCodename: string
  deadline: Date
  finalStatus: null
  createdAt: FieldValue
}

export interface UpdateHeistInput {
  title?: string
  direction?: string
  assignedTo?: string
  assignedToCodename?: string
  deadline?: Date
  finalStatus?: FinalStatus | null
}

export const heistConverter = {
  toFirestore: (data: Partial<Heist>): DocumentData => data,

  fromFirestore: (snapshot: QueryDocumentSnapshot): Heist => ({
    id: snapshot.id,
    ...snapshot.data(),
    createdAt: snapshot.data().createdAt?.toDate(),
    deadline: snapshot.data().deadline?.toDate(),
  } as Heist),
}
