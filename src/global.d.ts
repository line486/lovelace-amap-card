/**
 * 全局类型扩展
 */

/** Home Assistant customCards 注册 */
interface CustomCardInfo {
  type: string;
  name: string;
  description: string;
}

/** AMap 安全配置 */
interface AMapSecurityConfig {
  securityJsCode: string;
}

interface Window {
  customCards?: CustomCardInfo[];
  _AMapSecurityConfig?: AMapSecurityConfig;
}

/** 包含 callApi 方法的 HomeAssistant 扩展接口 */
interface HomeAssistantWithApi {
  callApi(method: string, path: string, body?: unknown): Promise<unknown>;
}
