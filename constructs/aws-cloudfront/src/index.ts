import { Construct } from 'constructs';
import { AwsCloudFrontProps } from './types';

export class AwsCloudFrontConstruct extends Construct {
  constructor(scope: Construct, id: string, props: AwsCloudFrontProps) {
    super(scope, id);

  }
}
