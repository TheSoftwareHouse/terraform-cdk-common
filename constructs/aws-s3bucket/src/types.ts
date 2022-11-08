import { AwsResourceProps } from "../../../libs/aws-common-tools/lib/types";
export interface AwsS3BucketProps extends AwsResourceProps {
    versioningEnabled: boolean;
}
