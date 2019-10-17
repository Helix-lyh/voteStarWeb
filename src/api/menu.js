const Menu = [
  { header: "数据看板" },
  {
    title: "Vote走势图",
    group: "apps",
    icon: "show_chart",
    name: "VoteCharts"
  },
  {
    title: "Vote详情表",
    group: "apps",
    icon: "table_chart",
    name: "VoteTables",
    items: [{ name: "Table", title: "Basic Table", component: "ListTable" }]
  },
  {
    title: "Widgets",
    group: "widgets",
    component: "widgets",
    icon: "widgets",
    items: [
      { name: "social", title: "Social", component: "SocialWidget" },
      {
        name: "statistic",
        title: "Statistic",
        badge: "new",
        component: "StatisticWidget"
      },
      { name: "chart", title: "Chart", component: "ChartWidget" },
      { name: "list", title: "List", component: "ListWidget" }
    ]
  },
  { header: "Vote管理" },
  {
    title: "List & Query",
    group: "layout",
    icon: "view_compact",
    items: [{ name: "Table", title: "Basic Table", component: "ListTable" }]
  },
  { header: "系统管理" },
  {
    title: "List & Query",
    group: "layout",
    icon: "view_compact",
    items: [{ name: "Table", title: "Basic Table", component: "ListTable" }]
  }
]
// reorder menu
Menu.forEach(item => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase()
      let textB = y.title.toUpperCase()
      return textA < textB ? -1 : textA > textB ? 1 : 0
    })
  }
})

export default Menu
