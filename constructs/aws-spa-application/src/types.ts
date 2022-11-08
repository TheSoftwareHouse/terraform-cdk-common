import { AWSCloudFrontProps } from "aws-cloudfront-construct/lib/types";

export interface AwsSpaApplicationProps {
    name: string;
    region: string;
    tags: string[];
    wafEnabled: boolean;
    cloudFrontEnabled: boolean;
    cloudFrontConfig?: AWSCloudFrontProps;
}
