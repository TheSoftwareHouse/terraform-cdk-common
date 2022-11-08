import { Construct } from 'constructs';
import { AWSCloudFrontProps } from './types';

export class AwsCloudFrontConstruct extends Construct {
  constructor(scope: Construct, id: string, props: AWSCloudFrontProps) {
    super(scope, id);

  }
}
