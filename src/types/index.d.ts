import { ZodIssue } from 'zod';
 
 type ActionResult<T> =type ActionResult<T> =
     { status: 'success', data: T } | { status: 'error', error: string | ZodIssue[] } 