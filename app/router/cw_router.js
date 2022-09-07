'use strict';
module.exports = app => {
  app.router.post('更新字段', '/admin/sys/models/updateFields', app.middleware.sys.authAdminToken(), 'sys.models.updateFields');
  app.router.get('路由列表', '/admin/sys/routes/routesList', app.middleware.sys.authAdminToken(), 'sys.routes.routesList');
  app.router.get('路由权限节点', '/admin/sys/role/routingNode', app.middleware.sys.authAdminToken(), 'sys.role.routingNode');
  app.router.get('graphQL权限节点', '/admin/sys/role/graphQL', app.middleware.sys.authAdminToken(), 'sys.role.graphQL');
  app.router.post('添加角色', '/admin/sys/role/addRole', app.middleware.sys.authAdminToken(), 'sys.role.addRole');
  app.router.get('角色列表', '/admin/sys/role/roleList', app.middleware.sys.authAdminToken(), 'sys.role.roleList');
  app.router.post('更新角色', '/admin/sys/role/update', app.middleware.sys.authAdminToken(), 'sys.role.update');
  app.router.get('删除角色', '/admin/sys/role/del', app.middleware.sys.authAdminToken(), 'sys.role.del');
  app.router.get('分组列表', '/admin/sys/user/groupList', app.middleware.sys.authAdminToken(), 'sys.user.groupList');
  app.router.post('添加分组', '/admin/sys/user/groupAdd', app.middleware.sys.authAdminToken(), 'sys.user.groupAdd');
  app.router.post('编辑分组', '/admin/sys/user/groupEdit', app.middleware.sys.authAdminToken(), 'sys.user.groupEdit');
  app.router.get('删除分组', '/admin/sys/user/groupDel', app.middleware.sys.authAdminToken(), 'sys.user.groupDel');
  app.router.get('用户列表', '/admin/sys/user/userList', app.middleware.sys.authAdminToken(), 'sys.user.userList');
  app.router.post('添加用户', '/admin/sys/user/userAdd', app.middleware.sys.authAdminToken(), 'sys.user.userAdd');
  app.router.post('编辑用户', '/admin/sys/user/userEdit', app.middleware.sys.authAdminToken(), 'sys.user.userEdit');
  app.router.get('删除用户', '/admin/sys/user/userDel', app.middleware.sys.authAdminToken(), 'sys.user.userDel');
  app.router.get('获取角色', '/admin/sys/user/roleList', app.middleware.sys.authAdminToken(), 'sys.user.roleList');
  app.router.get('获取索引', '/admin/sys/models/indexes', app.middleware.sys.authAdminToken(), 'sys.models.indexes');
  app.router.post('添加路由', '/admin/sys/routes/addRoutes', app.middleware.sys.authAdminToken(), 'sys.routes.addRoutes');
  app.router.post('更新索引', '/admin/sys/models/updateIndexes', app.middleware.sys.authAdminToken(), 'sys.models.updateIndexes');
  app.router.post('编辑路由', '/admin/sys/routes/editRoutes', app.middleware.sys.authAdminToken(), 'sys.routes.editRoutes');
  app.router.get('获取关联模型', '/admin/sys/models/associate', app.middleware.sys.authAdminToken(), 'sys.models.associate');
  app.router.get('删除路由', '/admin/sys/routes/delRoutes', app.middleware.sys.authAdminToken(), 'sys.routes.delRoutes');
  app.router.post('更新关联模型', '/admin/sys/models/updateAssociate', app.middleware.sys.authAdminToken(), 'sys.models.updateAssociate');
  app.router.get('获取上级路由', '/admin/sys/routes/topRoutes', app.middleware.sys.authAdminToken(), 'sys.routes.topRoutes');
  app.router.post('添加模型', '/admin/sys/models/addModels', app.middleware.sys.authAdminToken(), 'sys.models.addModels');
  app.router.post('视图编辑页面', '/admin/sys/routes/editPages', app.middleware.sys.authAdminToken(), 'sys.routes.editPages');
  app.router.post('路由排序', '/admin/sys/routes/saveOrder', app.middleware.sys.authAdminToken(), 'sys.routes.saveOrder');

};