//file này khai báo 2 type input và output của action
import { z } from 'zod';
import { Board } from '@prisma/client';

import { ActionState } from '@/lib/create-safe-action';

import { CreateBoard } from './schema';

// extract the inferred type
export type InputType = z.infer<typeof CreateBoard>;
export type ReturnType = ActionState<InputType, Board>;
