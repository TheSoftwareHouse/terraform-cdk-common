import { Construct } from 'constructs';
import { AwsS3BucketProps } from './types';
export class AwsS3BucketConstruct extends Construct {
    constructor(scope: Construct, id: string, props: AwsS3BucketProps) {
      super(scope, id);
    }
  }
