import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '其他',
    path: 'other',
    authority: 'admin',
    children: [
      {
        name: '上传文档',
        path: 'upload',
      },
    ],
  },
];

function formatter(data: any, parentPath = '/', parentAuthority: any) {
  return data.map((item: any) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData, '/', {});
