import { AwsResourceProps } from "aws-common-tools/lib/types";
export interface AwsS3BucketProps extends AwsResourceProps {
    versioningEnabled: boolean;
}
