const joi = require("@hapi/joi");

// 分别定义 标题、分类Id、内容、发布状态的校验规则
const title = joi.string().required();
const cate_id = joi.number().integer().min(1).required();
const content = joi.string().required().allow("");
const state = joi.string().valid("已发布", "草稿").required();

// 分别定义当前页，页面大小，分类id筛选，分类状态筛选的校验规则
const pagenum = joi.required();
const pagesize = joi.required();
const cate_id_optional = joi.optional();
const state_optional = joi.string().valid("草稿", "已发布", "").optional();

// 定义了文章id的校验规则
const id = joi.required();

// 验证规则对象 - 发布文章部分参数校验
exports.add_article_schema = {
  body: {
    title,
    cate_id,
    content,
    state,
  },
};
// 验证规则对象 - 获取文章列表参数校验
exports.list_article_schema = {
  query: {
    pagenum,
    pagesize,
    cate_id: cate_id_optional,
    state: state_optional,
  },
};
// 验证规则对象 - 删除文章参数校验
exports.del_article_schema = {
  params: {
    id,
  },
};
// 验证规则对象 - 更新文章参数校验
exports.eidt_article_schema = {
  body: {
    id,
    title,
    cate_id,
    content,
    state,
  },
};
