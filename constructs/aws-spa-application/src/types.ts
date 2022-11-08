import { AwsCloudFrontProps } from "aws-cloudfront-construct/lib/types";
import { AwsResourceProps } from "aws-common-tools/lib/types";
import { AwsS3BucketProps } from "aws-s3bucket-construct/lib/types";
export interface AwsSpaApplicationProps extends AwsResourceProps {
    s3BucketConfig: AwsS3BucketProps;
    wafEnabled: boolean;
    cloudFrontEnabled: boolean;
    cloudFrontConfig?: AwsCloudFrontProps;
}
