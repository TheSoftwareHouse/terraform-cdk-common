import { Construct } from 'constructs';
import { AwsSpaApplicationProps } from './types';

export class AwsSpaApplication extends Construct {
  constructor(scope: Construct, id: string, props: AwsSpaApplicationProps) {
    super(scope, id);
    if (props.cloudFrontEnabled) {
      console.log('CloudFront is enabled');
    }
    if (props.wafEnabled) {
      console.log('WAF is enabled');
    }
  }
}
