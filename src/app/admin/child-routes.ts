export const childRoutes = [
  {
    path: 'venda',
    loadChildren: () =>
      import('./venda/venda.module').then(m => m.VendaModule),
      data: { icon: 'add_shopping_cart', text: 'Venda' }
  },
  {
    path: 'produto',
    loadChildren: () =>
      import('./produto/produto.module').then(m => m.ProdutoModule),
      data: { icon: 'attach_money', text: 'Produto' }
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'bar_chart', text: 'Charts' }
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables.module').then(m => m.TablesModule),
    data: { icon: 'table_chart', text: 'Tables' }
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
    data: { icon: 'assignment', text: 'Forms' }
  },
  {
    path: 'mat-grid',
    loadChildren: () =>
      import('./mat-grid/mat-grid.module').then(m => m.MatGridModule),
    data: { icon: 'grid_on', text: 'Flex Grid' }
  },
  {
    path: 'mat-components',
    loadChildren: () =>
      import('./mat-components/mat-components.module').then(
        m => m.MatComponentsModule
      ),
    data: { icon: 'code', text: 'Material Components' }
  },
  {
    path: 'animations',
    loadChildren: () =>
      import('./animations/animations.module').then(m => m.AnimationsModule),
    data: { icon: 'perm_media', text: 'Animations' }
  },
  {
    path: 'google-maps',
    loadChildren: () =>
      import('./google-map-demo/google-map-demo.module').then(
        m => m.GoogleMapDemoModule
      ),
    data: { icon: 'place', text: 'Google Maps' }
  }
];
