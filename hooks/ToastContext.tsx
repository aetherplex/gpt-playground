import { createContext, useContext, useReducer } from 'react';

const ToastStateContext = createContext({ toasts: [] as any[] });
const ToastDispatchContext = createContext<React.Dispatch<any>>(() => null);

function ToastReducer(state: any, action: any) {
    switch (action.type) {
        case 'ADD_TOAST': {
            return {
                ...state,
                toasts: [...state.toasts, action.toast],
            };
        }
        case 'DELETE_TOAST': {
            const updatedToasts = state.toasts.filter(
                (e: any) => e.id != action.id
            );
            return {
                ...state,
                toasts: updatedToasts,
            };
        }
        default: {
            throw new Error('unhandled action');
        }
    }
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(ToastReducer, {
        toasts: [],
    });

    return (
        <ToastStateContext.Provider value={state}>
            <ToastDispatchContext.Provider value={dispatch}>
                {children}
            </ToastDispatchContext.Provider>
        </ToastStateContext.Provider>
    );
}

export const useToastStateContext = () => useContext(ToastStateContext);
export const useToastDispatchContext = () => useContext(ToastDispatchContext);
