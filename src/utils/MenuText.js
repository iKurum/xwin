export const menuText = [
  {
    name: '查看(V)',
    img: 'icontouming',
    children: [
      {
        name: '大图标',
        type: 'radio',
        radioName: 'size'
      },
      {
        name: '中等图标',
        type: 'radio',
        radioName: 'size'
      },
      {
        name: '小图标',
        type: 'radio',
        radioName: 'size',
        checked: true
      },
      'hr',
      {
        name: '自动排列图标',
        type: 'checkbox'
      },
      {
        name: '将图标与网格对齐',
        type: 'checkbox'
      },
      'hr', 
      {
        name: '显示桌面图标',
        type: 'checkbox',
        checked: true
      }
    ]
  },
  {
    name: '排序方式(O)',
    img: 'icontouming',
    children: [
      {
        name: '名称',
        type: 'radio',
        radioName: 'sort'
      },
      {
        name: '大小',
        type: 'radio',
        radioName: 'sort'
      },
      {
        name: '项目类型',
        type: 'radio',
        radioName: 'sort'
      }, 
      {
        name: '修改日期',
        type: 'radio',
        radioName: 'sort',
        checked: true
      }
    ]
  },
  {
    name: '刷新',
    img: 'icontouming'
  },
  'hr',
  {
    name: 'Cmder Here',
    img: 'iconcmder_orange'
  },
  {
    name: 'Git bash Here',
    img: 'icongit'
  },
  {
    name: '通过 Code 打开',
    img: 'iconvscodeignore'
  },
  'hr',
  {
    name: '新建(W)',
    img: 'icontouming',
    children: [
      {
        name: '文件夹',
        img: 'iconiconfontcolor52'
      },
      'hr', 
      {
        name: '文本文档',
        img: 'icontext_icon'
      },
      {
        name: 'Word 文档',
        img: 'iconword'
      },
      {
        name: 'PowerPoint 演示文稿',
        img: 'iconppt'
      },
      {
        name: 'Excel 工作表',
        img: 'iconexcel'
      }
    ]
  }
]
