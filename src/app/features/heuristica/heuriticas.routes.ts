import { Routes } from '@angular/router';

export const heuristicaRoutes: Routes = [
    // Rutas con nombres descriptivos (recomendado)
    {
        path: 'visibilidad-estado-sistema',
        loadComponent: () => import('./estado-sistema/estado-sistema').then(m => m.EstadoSistema)
    },
    {
        path: 'correspondencia-mundo-real',
        loadComponent: () => import('./estado-sistema02/mundo-real').then(m => m.EstadoSistema02) // Temporal, cambiar por H2Page cuando esté listo
    },
    {
        path: 'control-libertad-usuario',
        loadComponent: () => import('./control-libertad/control-libertad').then(m => m.ControlLibertad) // Temporal, cambiar por H3Page cuando esté listo
    },
    {
        path: 'consistencia-estandares',
        loadComponent: () => import('./consistencia-estandares/consistencia-estandares').then(m => m.ConsistenciaEstandares) // Temporal, cambiar por H4Page cuando esté listo
    },
    {
        path: 'prevencion-errores',
        loadComponent: () => import('./prevencion-errores/prevencion-errores').then(m => m.PrevencionErrores) // Temporal, cambiar por H5Page cuando esté listo
    },
    {
        path: 'reconocimiento-recordar',
        loadComponent: () => import('./reconocimiento-recordar/reconocimiento-recordar').then(m => m.ReconocimientoRecordar) // Temporal, cambiar por H6Page cuando esté listo
    },
    {
        path: 'flexibilidad-eficiencia',
        loadComponent: () => import('./estado-sistema/estado-sistema').then(m => m.EstadoSistema) // Temporal, cambiar por H7Page cuando esté listo
    },
    {
        path: 'diseno-estetico-minimalista',
        loadComponent: () => import('./estado-sistema/estado-sistema').then(m => m.EstadoSistema) // Temporal, cambiar por H8Page cuando esté listo
    },
    {
        path: 'ayuda-reconocer-errores',
        loadComponent: () => import('./estado-sistema/estado-sistema').then(m => m.EstadoSistema) // Temporal, cambiar por H9Page cuando esté listo
    },
    {
        path: 'ayuda-documentacion',
        loadComponent: () => import('./estado-sistema/estado-sistema').then(m => m.EstadoSistema) // Temporal, cambiar por H10Page cuando esté listo
    },

    // También mantenemos las rutas con números para compatibilidad
    {
        path: '1',
        redirectTo: 'visibilidad-estado-sistema'
    },
    {
        path: '2',
        redirectTo: 'correspondencia-mundo-real'
    },
    {
        path: '3',
        redirectTo: 'control-libertad-usuario'
    },
    {
        path: '4',
        redirectTo: 'consistencia-estandares'
    },
    {
        path: '5',
        redirectTo: 'prevencion-errores'
    },
    {
        path: '6',
        redirectTo: 'reconocimiento-recordar'
    },
    {
        path: '7',
        redirectTo: 'flexibilidad-eficiencia'
    },
    {
        path: '8',
        redirectTo: 'diseno-estetico-minimalista'
    },
    {
        path: '9',
        redirectTo: 'ayuda-reconocer-errores'
    },
    {
        path: '10',
        redirectTo: 'ayuda-documentacion'
    },

    // Ruta por defecto
    {
        path: '',
        redirectTo: 'visibilidad-estado-sistema',
        pathMatch: 'full'
    },

    // Ruta wildcard para rutas no encontradas
    {
        path: '**',
        redirectTo: 'visibilidad-estado-sistema'
    }
];