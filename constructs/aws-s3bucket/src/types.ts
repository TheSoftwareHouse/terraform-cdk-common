import { AwsResourceProps } from "cdk-aws-common-tools/lib/types";
export interface AwsS3BucketProps extends AwsResourceProps {
    versioningEnabled: boolean;
}
