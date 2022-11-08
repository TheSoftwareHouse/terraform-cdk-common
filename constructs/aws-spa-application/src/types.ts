import { AwsCloudFrontProps } from "cdk-aws-cloudfront-construct/lib/types";
import { AwsResourceProps } from "cdk-aws-common-tools/lib/types";
import { AwsS3BucketProps } from "cdk-aws-s3bucket-construct/lib/types";
export interface AwsSpaApplicationProps extends AwsResourceProps {
    s3BucketConfig: AwsS3BucketProps;
    wafEnabled: boolean;
    cloudFrontEnabled: boolean;
    cloudFrontConfig?: AwsCloudFrontProps;
}
