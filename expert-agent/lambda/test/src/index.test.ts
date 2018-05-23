import * as Lambda from 'aws-lambda';
import * as Mocha from 'mocha';
import { IMock, It, Mock } from 'moq.ts';
import * as Assert from 'power-assert';
import { handler } from '../../src/index';
import { event } from './event';

/**
 * テスト
 */
describe('index.handlerのテスト', () => {
  // コンテキストモック
  let contextMock: IMock<Lambda.Context>;

  /**
   * 前処理
   */
  before(async () => {
    // コンテキストモック
    contextMock = new Mock<Lambda.Context>('contextMock');
  });

  /**
   * 前処理（各テスト毎）
   */
  beforeEach(() => {

  });

  /**
   * 後処理（各テスト毎）
   */
  afterEach(() => {

  });

  /**
   * 後処理
   */
  after(() => {

  });

  // 検証
  it('正常終了すること', async () => {
    try {
      // 実行
      await handler(
        event,
        contextMock.object(),
        (error?: Error | null, result?: any) => {
          if (error || result === undefined) {
            // エラーもしくは結果が未定義の場合
            Assert.fail('異常終了');
          }

          // アサーション
          Assert.equal(result.statusCode, 200);

          // パース
          const bodyActual = JSON.parse(result.body);

          Assert.equal(bodyActual.params.message, 'はい、こんにちはだよ');
        }
      );
    } catch (error) {
      Assert.fail(error);
    }
  });
});
